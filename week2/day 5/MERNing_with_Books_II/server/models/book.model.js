// Books_FULL/server/models/book.model.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required, bro!'],
      minlength: [2, 'Title must be at least 2 characters!'],
      maxlength: [255, 'Title cannot exceed 255 characters!'],
    },
    author: {
      type: String,
      required: [true, 'Author is required, dude!'],
      minlength: [5, 'Author must be at least 5 characters!'],
      maxlength: [255, 'Author cannot exceed 255 characters!'],
    },
    pages: {
      type: Number,
      required: [true, 'Pages are required, man!'],
      min: [1, 'Pages must be at least 1!'],
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;