import app from './app';
import { config } from './environments/environment';

const port = config.port || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
