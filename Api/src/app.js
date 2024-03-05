import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import v1Routes from './api/v1/index.js';
const app = express();

app.use(json());
app.use(cors());
app.use(helmet());

app.disable('x-powered-by');

// version routes
app.use('/api/v1', v1Routes);

export default app;