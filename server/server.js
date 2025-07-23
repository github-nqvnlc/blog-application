import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import cors from 'cors';
import {
  errorResponserHandler,
  invalidPathHandler,
} from './middleware/errorHandler.js';

// Routes
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import postCategoriesRoutes from './routes/postCategoriesRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

const corsOptions = {
  exposedHeaders: '*',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/post-categories', postCategoriesRoutes);

// static assets
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
