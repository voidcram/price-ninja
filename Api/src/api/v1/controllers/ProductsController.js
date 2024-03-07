import { Change, Product, Category } from "../../../models/index.js"
import { productSchema, patchSchema } from "../schemas/schemas.js";

export async function createProduct(req, res) {
  const productData = req.body;

  try {
    const validation = productSchema.validate(productData);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    // Check if product with that url already exists
    let exists = await Product.findOne({ where: { url: productData.url}})
    if (exists) {
      return res.status(409).json({ message: "Product already exists"})
    }

    // Check if the category exists
    let category = await Category.findOne({ where: { name: productData.category } });
    if (!category) {
      return res.status(404).json({ message: "Category doesnt exist"})
    }

    // Add the category ID to the product data, and change the key to category_id
    productData.category_id = category.id;
    delete productData.category;

    const newProduct = await Product.create(productData);

    return res.status(201).json(newProduct);
  } catch (error) {
    res.log.error(`Error creating product: ${error}`)
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getAll(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.log.error(`Error getting all products: ${error}`)
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getById(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.log.error(`Error product by id ${id}: ${error}`)
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getByCategory(req, res) {
  const { id } = req.params;

  try {
    // Check if the category exists
    let category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Category doesnt exist"})
    }

    // Get products of that category
    const products = await Product.findAll({ where: { category_id: id } });

    // Return the products
    return res.status(200).json(products);
  } catch (error) {
    res.log.error(`Error fetching products by category id ${id}: ${error}`)
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getChanges(req, res) {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const changes = await Change.findAll({ where: { product_id: id } });

    return res.status(200).json(changes);
  } catch (error) {
    res.log.error(`Error fetching product changes for id ${id}: ${error}`)
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

    let category = await Category.findOne({ where: { name: productData.category } });
    if (!category) {
      return res.status(404).json({ message: "Category doesnt exist"})
    }

    const [updated] = await Product.update(productData, { where: { id } });

    // Return updated product incase it got updated
    if (updated) {
      const updatedProduct = await Product.findOne({ where: { id } });
      return res.status(200).json(updatedProduct);
    }

    return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.log.error(`Error updating product with id ${id}: ${error}`)
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
      return res.status(404).json({ error: 'Product not found' });
    }

    // Apply updates to the product
    Object.assign(product, productData);
    await product.save();

    // Respond with the updated product
    return res.status(200).json(product);
  } catch (error) {
    res.log.error(`Error patching product with id ${id}: ${error}`)
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const deleted = await Product.destroy({ where: { id } });
    if (deleted) return res.status(204).send();

    return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.log.error(`Error deleting product with id ${id}: ${error}`)
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
