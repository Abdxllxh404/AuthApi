import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './config/database';
import rateLimit from 'express-rate-limit';
import authRouter from './routes/auth/authRouter';
import helmet from 'helmet';
import cors from 'cors';
import logger from './utils/logger';
import morgan from 'morgan';

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 นาที
  max: 100, // จำกัดจำนวนคำขอ 100 ครั้งต่อ 15 นาที
});

app.use(
  morgan('combined', {
    stream: { write: (message) => logger.info(message.trim()) },
  }),
);

app.use(cors());

app.use(helmet());
app.use(bodyParser.json());
app.use('/api/auth', apiLimiter, authRouter);

sequelize
  .sync()
  .then(() => {
    console.log(`Database running at http://localhost/phpmyadmin`);
  })
  .catch((err) => console.log(err));

export default app;
