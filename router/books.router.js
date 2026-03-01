import express from 'express'
import { getBookbyId, getBooks } from '../controllers/books.controller.js';

const booksRouter = express.Router();

booksRouter.get('/',getBooks)
booksRouter.get("/:id",getBookbyId)


export default booksRouter