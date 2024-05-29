import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env['PORT'],
  host: process.env['HOST'],
  jwtSecret:
    process.env['JWT_SECRET'] || '720ba8b7-932c-4a9c-9fe2-20dc2e32f6ac',
  mysql: {
    host: process.env['MYSQL_HOST'],
    user: process.env['MYSQL_USER'],
    password: process.env['MYSQL_PASSWORD'],
    database: process.env['MYSQL_DATABASE'],
    port: process.env['MYSQL_PORT'],
  },
  emailService: process.env['EMAIL_SERVICE'] || 'smtp-relay.brevo.com',
  emailUser: process.env['EMAIL_USER'] || '75afa6001@smtp-brevo.com',
  emailPass: process.env['EMAIL_PASS'] || 'nht2JVvSKWp8ZNc9',
};
