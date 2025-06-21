import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
const dbConfig = {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'myapp',
    password: process.env.DB_PASSWORD || 'password',
    port: parseInt(process.env.DB_PORT) || 5432,

    // Pool configuration
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
};

const pool = new Pool(dbConfig);
pool.on('error', (err) => {
    console.error('❌ Unexpected error on idle client', err);
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
