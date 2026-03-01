import express from "express";
import dotenv from "dotenv";
import booksRouter from "./router/books.router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT} `);
});
