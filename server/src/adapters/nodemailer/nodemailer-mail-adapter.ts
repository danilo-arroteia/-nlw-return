import { MailAdapter, SendMailData } from "./../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "660e401c1cd55a",
      pass: "601d9e9f545302"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Danilo Arroteia <sikor12@gmail.com>",
      subject,
      html: body,
    });
  }
}
