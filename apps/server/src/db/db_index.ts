import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();


const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING_URL,
    ssl: {
        rejectUnauthorized: false, // required for Neon in most cases
    },
});
pool.on('error', (err: Error) => {
    console.error('error while connecting to pool', err);
    process.exit(1);
});

const connectDB = async () => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT NOW()')
        client.release();
        console.log("db connected");
    } catch (err) {
        console.error("error while connecting to db", err);
        process.exit(1);
    }
}

export default connectDB;
