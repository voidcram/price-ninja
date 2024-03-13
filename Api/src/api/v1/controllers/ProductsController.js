import apicache from "apicache-plus";
import { Op } from "sequelize";
import { Change, Product, Category } from "../models/index.js";
import { productSchema, patchSchema, scrapeSchema, querySchema } from "../schemas/schemas.js";
import scraperService from "../services/scraperService.js";
import logger from "../../../config/logger.js";

export async function createProduct(req, res) {
  const productData = req.body;

  try {
    const validation = productSchema.validate(productData);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    // Check if product with that url already exists
    let exists = await Product.findOne({ where: { url: productData.url } });
    if (exists) {
      return res.status(409).json({ message: "Product already exists" });
    }

    const [category, created] = await Category.findOrCreate({ where: { name: productData.category }});
    if (created) {
      logger.info(`Created new category ${productData.category}`)
    }

    // Add the category ID to the product data, and change the key to category_id
    productData.category_id = category.id;
    delete productData.category;

    const newProduct = await Product.create(productData);

    // Clear the cache key of products for get new products instead of getting from cache
    apicache.clear("ProductList");

    return res.status(201).json(newProduct);
  } catch (error) {
    logger.error(error, "Error creating product");
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function scrapeProduct(req, res) {
  const { url } = req.body;

  try {
    const validation = scrapeSchema.validate(req.body);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    // Check if product with that url already exists
    let exists = await Product.findOne({ where: { url } });
    if (exists) {
      return res.status(409).json({ message: "Product already exists" });
    }

    // Scrape product info
    const scrapedData = await scraperService.scrape(url);

    // Check if the category exists
    const [category, created] = await Category.findOrCreate({ where: { name: scrapedData.category }});
    if (created) {
      logger.info(`Created new category ${scrapedData.category}`)
    }

    // Add the category ID to the product data, and change the key to category_id
    scrapedData.category_id = category.id;
    delete scrapedData.category;

    const newProduct = await Product.create(scrapedData);

    // Clear the cache key of products for get new products instead of getting from cache
    apicache.clear("ProductList");

    return res.status(201).json(newProduct);
  } catch (error) {
    logger.error(error, "Error scraping product");
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getAll(req, res) {
  req.apicacheGroup = "ProductList";

  try {
    const validation = querySchema.validate(req.query);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    let where = {};
    const searchQuery = req.query.search

    // if the query search its provided modify the where
    if (searchQuery) {
      where = {
        name: { [Op.like]: `%${searchQuery}%` }
      };
      logger.info(`Searching search query: ${searchQuery}`)
    }

    const { count, rows: products } = await Product.findAndCountAll({
      limit: req.query.limit,
      offset: req.skip,
      where,
      include: Category,
      attributes: {
        exclude: ["category_id"],
      },
    });

    const totalProducts = count;
    const currentPage = req.query.page;
    const pages = Math.ceil(totalProducts / req.query.limit);

    return res.json({
      totalProducts,
      pages,
      currentPage,
      data: products,
    });
  } catch (error) {
    logger.error(error, "Error getting all products");
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getById(req, res) {
  req.apicacheGroup = "ProductList";
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      include: Category,
      attributes: {
        exclude: ["category_id"],
      },
    });
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    logger.error(error, `Error getting product id ${id}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getByCategory(req, res) {
  req.apicacheGroup = "ProductList";
  const { id } = req.params;

  try {
    const validation = querySchema.validate(req.query);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    // Check if the category exists
    let category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Category doesnt exist" });
    }

    let where = { category_id: id };
    const searchQuery = req.query.search

    // if the query search its provided modify the where
    if (searchQuery) {
      where = {
        category_id: id,
        name: { [Op.like]: `%${searchQuery}%` }
      };
      logger.info(`Searching search query: ${searchQuery}`)
    }

    // Get products of that category
    const { count, rows: products } = await Product.findAndCountAll({
      limit: req.query.limit,
      offset: req.skip,
      where,
      include: Category,
      attributes: {
        exclude: ["category_id"],
      },
    });

    const totalProducts = count;
    const currentPage = req.query.page;
    const pages = Math.ceil(totalProducts / req.query.limit);

    return res.json({
      totalProducts,
      pages,
      currentPage,
      data: products,
    });
  } catch (error) {
    logger.error(error, `Error fetching products by category id ${id}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getChanges(req, res) {
  req.apicacheGroup = "ProductList";
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { count, rows: changes } = await Change.findAndCountAll({
      limit: req.query.limit,
      offset: req.skip,
      where: { product_id: id },
    });

    const totalChanges = count;
    const currentPage = req.query.page;
    const pages = Math.ceil(totalChanges / req.query.limit);

    return res.json({
      totalChanges,
      pages,
      currentPage,
      data: changes,
    });
  } catch (error) {
    logger.error(error, `Error fetching products changes for id ${id}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const productData = req.body;

  try {
    const validation = productSchema.validate(productData);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    let category = await Category.findOne({
      where: { name: productData.category },
    });
    if (!category) {
      return res.status(404).json({ message: "Category doesnt exist" });
    }

    const [updated] = await Product.update(productData, { where: { id } });

    // Return updated product incase it got updated
    if (updated) {
      const updatedProduct = await Product.findOne({ where: { id } });
      // Clear the cache key of products for get new products instead of getting from cache
      apicache.clear("ProductList");
      return res.status(200).json(updatedProduct);
    }

    return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    logger.error(error, `Error updating product with id ${id}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function patchProduct(req, res) {
  const { id } = req.params;
  const productData = req.body;

  try {
    const validation = patchSchema.validate(productData);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    // Retrieve the product by ID
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Apply updates to the product
    Object.assign(product, productData);
    await product.save();

    // Clear the cache key of products for get new products instead of getting from cache
    apicache.clear("ProductList");

    // Respond with the updated product
    return res.status(200).json(product);
  } catch (error) {
    logger.error(error, `Error patching product with id ${id}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const deleted = await Product.destroy({ where: { id } });
    if (deleted) {
      // Clear the cache key of products for get new products instead of getting from cache
      apicache.clear("ProductList");
      return res.status(204).send();
    }

    return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    logger.error(error, `Error deleting product with id ${id}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
