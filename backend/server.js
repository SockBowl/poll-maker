import cors from 'cors';
import express from 'express';
import pollRoutes from './api/routes/polls.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/polls', pollRoutes);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;
