// Books_FULL/server/controllers/book.controller.js
import Book from '../models/book.model.js';

const bookController = {
  // POST: Add a new book
  createBook: async (req, res) => {
    try {
      const book = new Book(req.body);
      const savedBook = await book.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(400).json({ message: 'Error adding book', errors: error.errors });
    }
  },

  // GET: Retrieve all books
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching books', error });
    }
  },

  // GET: Retrieve a single book by ID
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found!' });
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching book', error });
    }
  },

  // DELETE: Remove a book by ID
  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found!' });
      res.status(200).json({ message: 'Book deleted', book });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting book', error });
    }
  },
};

export default bookController;