// Books/routes/book.routes.js
import { Router } from 'express';
import Book from '../models/book.model.js';

const router = Router();

// POST: Add a new book
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: 'Error adding book', error: error.errors });
  }
});

// GET: Retrieve all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
});

// GET: Retrieve a single book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found, bro!' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
});

// PUT: Edit a book by ID
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return updated document
      runValidators: true, // Enforce schema validations
    });
    if (!book) {
      return res.status(404).json({ message: 'Book not found, dude!' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: 'Error updating book', error: error.errors });
  }
});

// DELETE: Remove a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found, man!' });
    }
    res.status(200).json({ message: 'Book deleted successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
});

export default router;