import { createTransport, Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export class Nodemailer {
  private readonly transport: Transporter;

  constructor() {
    this.transport = createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT || 0),
      secure: process.env.NODEMAILER_SECURE === 'true',
      auth: {
        user: process.env.NODEMAILER_AUTH_USER,
        pass: process.env.NODEMAILER_AUTH_PASS,
      },
    });

    console.log('Mailer Ready');
  }

  sendMail(options: Omit<Mail.Options, 'from'>) {
    this.transport.sendMail({
      from: process.env.NODEMAILER_AUTH_USER,
      ...options,
    });
  }
}

const mailer = new Nodemailer();

export default mailer;
