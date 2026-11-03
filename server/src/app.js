import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env.js';
import apiRoutes from './routes/api.routes.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin) return callback(null, true);
      // In development or on Vercel preview/production domains, allow origin
      if (
        config.nodeEnv === 'development' ||
        origin === config.clientOrigin ||
        origin.startsWith('http://localhost:') ||
        origin.startsWith('http://127.0.0.1:') ||
        origin.endsWith('.vercel.app')
      ) {
        return callback(null, true);
      }
      // Public read-only portfolio API allows GET from anywhere
      return callback(null, true);
    },
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// API routes (support both /api/* and root/* routing in serverless)
app.use('/api', apiRoutes);
app.use('/', apiRoutes);

// Fallbacks
app.use(notFound);
app.use(errorHandler);

export default app;
