import { Sequelize } from 'sequelize';
import { config } from '../environments/environment';

if (
  !config.mysql.database ||
  !config.mysql.user ||
  !config.mysql.password ||
  !config.mysql.host
) {
  throw new Error(
    'One or more required database configuration values are undefined',
  );
}

export const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: 'mysql',
  },
);
