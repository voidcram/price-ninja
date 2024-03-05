import express from 'express';
import productsRoutes from './routes/products.js';

const v1Router = express.Router();

// products routes
v1Router.use('/products', productsRoutes);

export default v1Router;
