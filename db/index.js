
import { drizzle } from "drizzle-orm/node-postgres";
import 'dotenv/config'


// postgress://<username>:<password>@<host>:<port>/<db_name>

console.log(process.env.DATABASE_URL);

export const db = drizzle(process.env.DATABASE_URL);
