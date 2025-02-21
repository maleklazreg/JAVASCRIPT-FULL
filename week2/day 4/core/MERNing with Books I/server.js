// Books/server.js
import express from 'express';
import connectDB from './config/db.config.js';
import bookRoutes from './routes/book.routes.js';

const app = express();
const port = 8000;

app.use(express.json()); // Parse JSON bodies
app.use('/api/books', bookRoutes); // Mount book routes

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});