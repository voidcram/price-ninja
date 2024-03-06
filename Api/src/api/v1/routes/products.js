import express from 'express';
import * as productsController from "../controllers/products.js";

const router = express.Router();

// Routes for products

// Create new product
router.post('/', productsController.createProduct);

// Read product/s
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);

// Get products by category
router.get('/category/:id', productsController.getByCategory);

// Get product changes (i do it separated cause overtime it gonna scale to many changes)
router.get('/:id/changes', productsController.getChanges);

// Update product
router.put('/:id', productsController.updateProduct)

// Update specific product fields
router.patch('/:id', productsController.patchProduct)

// Delete product
router.delete('/:id', productsController.deleteProduct)

export default router;