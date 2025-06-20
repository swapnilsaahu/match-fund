import express from 'express';
import cors from 'cors';
//import dotenv from 'dotenv';

//dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ message: 'API is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
