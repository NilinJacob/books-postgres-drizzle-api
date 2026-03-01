import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";

// postgress://<username>:<password>@<host>:<port>/<db_name>

export const db = drizzle(process.env.DATABASE_URL);
