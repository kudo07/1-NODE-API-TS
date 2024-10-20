// initialse the connection in drizzle
// import 'dotenv/config';
// we handle the env file in the development mode itself
//
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);
