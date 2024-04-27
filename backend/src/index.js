import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import shrinkRay from "@nitedani/shrink-ray-current";
import logger from './config/logger.js';

import v1Routes from './api/v1/index.js';
const app = express();

app.use(json());
app.use(cors());
app.use(helmet()); // Security headers
app.use(shrinkRay()); // Compression
app.disable('x-powered-by');

// version routes
app.use('/api/v1', v1Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`API running on port: ${PORT}`));