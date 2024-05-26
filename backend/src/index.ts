import app from './app';
import express, { Express, Request, Response } from 'express';

import { config } from './environments/environment';

const port = config.port;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
