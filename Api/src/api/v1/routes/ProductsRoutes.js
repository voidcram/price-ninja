import express from 'express';
import paginate from 'express-paginate';
import * as productsController from "../controllers/ProductsController.js";
import apicache from 'apicache-plus'

const router = express.Router();

// Create new product
router.post('/', productsController.createProduct);

// Scrape a product
router.post('/scrape', productsController.scrapeProduct);

// Get product/s
router.get('/', paginate.middleware(10, 50), apicache('1 hour'), productsController.getAll);
router.get('/:id', apicache('1 hour'), productsController.getById);

// Get products by category
router.get('/categories/:id', paginate.middleware(10, 50), apicache('1 hour'), productsController.getByCategory);

// Get product changes (i do it separated cause overtime it gonna scale to many changes)
router.get('/changes/:id', paginate.middleware(10, 50), apicache('1 hour'), productsController.getChanges);

// Update product
router.put('/:id', productsController.updateProduct)

// Update specific product fields
router.patch('/:id', productsController.patchProduct)

// Delete product
router.delete('/:id', productsController.deleteProduct)

export default router;