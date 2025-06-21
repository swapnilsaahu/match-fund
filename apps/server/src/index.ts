import dotenv from 'dotenv';
import connectDB from './db/db_index'
dotenv.config();
import { app } from './app'

connectDB()
    .then(async () => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`server is running at ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.error("db connection failed", error);
    })

