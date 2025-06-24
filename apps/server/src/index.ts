import dotenv from 'dotenv';
import prisma from './db/db_index';
dotenv.config();
import { app } from './app'

const startUpServer = async () => {
    try {
        await prisma.$connect();
        console.log('db connnected');

        app.listen(process.env.PORT || 3000, () => {
            console.log(`server running at ${process.env.PORT}`)
        })
    } catch (err) {
        console.error("failed to connect to db", err);
        process.exit(1);
    }
}

startUpServer();
