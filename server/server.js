import express from 'express';
import "dotenv/config";
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import connectDB from './configs/db.js';
import clerkWebhooks from './controllers/clerkWebhooks.js';

connectDB();

const app = express();

app.use(cors());

// Use raw body parser ONLY for webhook route (required for svix signature verification)
app.use('/api/clerk', express.raw({ type: 'application/json' }));

// Use normal JSON parser for all other routes
app.use(express.json());

app.use(clerkMiddleware());

// Webhook route
app.use('/api/clerk', clerkWebhooks);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
