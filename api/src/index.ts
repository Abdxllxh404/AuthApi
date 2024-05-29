import app from './app';
import { Request } from 'express';

import { config } from './environments/environment';

const port = config.port || 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
