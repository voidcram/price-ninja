import express from 'express';
import * as categoriesController from "../controllers/CategoriesController.js";

const router = express.Router();

// Get categories
router.get('/', categoriesController.getAll);

export default router;