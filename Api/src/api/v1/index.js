import express from 'express';
import productsRoutes from './routes/ProductsRoutes.js';
import limiter from "./middlewares/rate-limit.js";

const v1Router = express.Router();

v1Router.use(limiter)

// products routes
v1Router.use('/products', productsRoutes);

export default v1Router;
