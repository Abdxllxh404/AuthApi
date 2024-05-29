import nodemailer from 'nodemailer';
import { config } from '../environments/environment';

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  secure: false,
  auth: {
    user: 'abdulloh.mukem@gmail.com',
    pass: 'nht2JVvSKWp8ZNc9',
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const mailOptions = {
    from: 'abdulloh.mukem@gmail.com',
    to: email,
    subject: 'Account Verification',
    text: `Please verify your account by clicking the link: \nhttp:\/\/${config.host}\/confirmation\/${token}`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const mailOptions = {
    from: config.emailUser,
    to: email,
    subject: 'Password Reset',
    text: `You requested a password reset. Click the link below to reset your password: \nhttp:\/\/${config.host}\/reset-password\/${token}`,
  };

  await transporter.sendMail(mailOptions);
};
