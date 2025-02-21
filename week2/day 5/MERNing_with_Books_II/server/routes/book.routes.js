// Books_FULL/server/routes/book.routes.js
import { Router } from 'express';
import bookController from '../controllers/book.controller.js';

const router = Router();

router.route('/')
  .post(bookController.createBook)
  .get(bookController.getAllBooks);

router.route('/:id')
  .get(bookController.getBookById)
  .delete(bookController.deleteBook);

export default router;