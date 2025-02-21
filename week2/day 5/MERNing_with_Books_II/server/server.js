// Books_FULL/server/server.js
import express from 'express';
import connectDB from './config/db.config.js';
import bookRoutes from './routes/book.routes.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/api/books', bookRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});