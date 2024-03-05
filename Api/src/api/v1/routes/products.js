import express from 'express';
import * as productsController from "../controllers/products.js";

const router = express.Router();

// Routes for products
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);

export default router;