import express from 'express';
import * as productsController from "../controllers/products.js";

const router = express.Router();

// Routes for products

// Create / Scrape new product
router.post('/', productsController.scrapeProduct);

// Read product/s
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);

// Get product changes i do it separated cause overtime it gonna scale to many data
router.get('/:id/changes', productsController.getChanges);

// Update product
router.put('/:id', productsController.updateProduct)

// Delete product
router.delete('/:id', productsController.deleteProduct)

export default router;