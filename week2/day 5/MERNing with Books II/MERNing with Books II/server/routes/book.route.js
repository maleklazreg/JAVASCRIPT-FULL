import {Router} from "express"
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book.controller.js";
const bookRouter = Router();
bookRouter
    .route("/")
    .get(getAllBooks)
    .post(createBook)


bookRouter
    .route("/:id")
    .put(updateBook)
    .get(getBookById)
    .delete(deleteBook)




export default bookRouter;