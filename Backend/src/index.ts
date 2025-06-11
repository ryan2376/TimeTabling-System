import express from 'express';
import cors from 'cors';
import pool from './db';
// import dotenv from 'dotenv';


// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

// connection test
pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('PostgreSQL connection error', err))

app.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});