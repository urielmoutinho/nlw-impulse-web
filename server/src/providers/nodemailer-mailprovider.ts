import nodemailer from "nodemailer";
import { MailProvider, SendMailData } from "./mail-provider";
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e84cefd882fe24",
    pass: "489bf10eb857e5"
  },
});

export class NodemailerMailProvider implements MailProvider {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <no-reply@gmail.com>",
      to: "Breno <breno2926@gmail.com>",
      subject,
      html: body,
    });
  }
}
