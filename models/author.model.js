import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";

export const authorsTable = pgTable("authors", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 50 }).notNull(),
  email: varchar({ length: 100 }).notNull(),
});
