import app from './server.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.POLLS_DB_URI, { useNewUrlParser: true })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log('connected to database');
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
