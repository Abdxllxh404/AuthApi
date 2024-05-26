import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './config/database';
import rateLimit from 'express-rate-limit';
import authRouter from './routes/auth/authRouter';
import { config } from './environments/environment';

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 นาที
  max: 100, // จำกัดจำนวนคำขอ 100 ครั้งต่อ 15 นาที
});

app.use(bodyParser.json());
app.use('/api/auth', apiLimiter, authRouter);

sequelize.sync().then(() => {
  console.log('Database connected');
}).catch(err => console.log(err));

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
