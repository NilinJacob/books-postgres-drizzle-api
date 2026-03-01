import express from 'express'
import { getBooks } from '../controllers/books.controller.js';

const booksRouter = express.Router();

booksRouter.get('/',getBooks)