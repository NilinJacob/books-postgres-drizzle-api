import { integer, pgTable, varchar, uuid } from "drizzle-orm/pg-core";
import { authorsTable } from "./author.model.js";

export const booksTable = pgTable("books", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 100 }).notNull(),
  authorId: uuid().references(() => authorsTable.id).notNull(),
});
