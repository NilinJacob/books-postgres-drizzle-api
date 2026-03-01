import { db } from "../db/index.js";
import { booksTable } from "../models/books.model.js";

export const getBooks = async (req, res) => {
  try {
    const allBooks = await db.select().from(booksTable);
    if (allBooks.length === 0) {
      return res.status(200).json({
        message: "No books found",
      });
    }

    return res.status(200).json({
      data: allBooks,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch books",
    });
  }
};
