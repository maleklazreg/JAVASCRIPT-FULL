// Books/models/book.model.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required, bro!'],
      minlength: [2, 'Title must be at least 2 characters long, dude!'],
      maxlength: [255, 'Title cannot exceed 255 characters, keep it short!'],
    },
    author: {
      type: String,
      required: [true, 'Author is required, man!'],
      minlength: [5, 'Author name must be at least 5 characters, come on!'],
      maxlength: [255, 'Author name cannot exceed 255 characters, chill!'],
    },
    pages: {
      type: Number,
      required: [true, 'Pages are required, gotta know how long it is!'],
      min: [1, 'Pages must be at least 1, no empty books allowed!'],
    },
    isAvailable: {
      type: Boolean,
      default: false, // Defaults to false per requirement
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Book = mongoose.model('Book', bookSchema);
export default Book;