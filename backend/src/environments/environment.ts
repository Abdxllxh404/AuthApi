import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env['PORT'] || 3000,
  host: process.env['HOST'] || 'localhost',
  jwtSecret: process.env['JWT_SECRET'] || 'your_secret_key',
  mysql: {
    host: process.env['MYSQL_HOST'] ,
    user: process.env['MYSQL_USER'],
    password: process.env['MYSQL_PASSWORD'],
    database: process.env['MYSQL_DATABASE'],
    port: process.env['PORT'] || 3306,
  },
  emailService: process.env['EMAIL_SERVICE'] || 'Gmail',
  emailUser: process.env['EMAIL_USER'] || 'your_email@gmail.com',
  emailPass: process.env['EMAIL_PASS'] || 'your_email_password',
};
