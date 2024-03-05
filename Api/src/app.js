import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import shrinkRay from "@nitedani/shrink-ray-current";
import v1Routes from './api/v1/index.js';
const app = express();

app.use(json());
app.use(cors());
// Security headers
app.use(helmet());
// Compression
app.use(shrinkRay());
app.disable('x-powered-by');

// version routes
app.use('/api/v1', v1Routes);

export default app;