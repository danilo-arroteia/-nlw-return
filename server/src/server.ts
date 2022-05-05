import express from "express";
import nodemailer from 'nodemailer';
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "660e401c1cd55a",
    pass: "601d9e9f545302"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot, 
    },
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Danilo Arroteia <sikor12@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Tipo do comentario: ${comment}</p>`,
      `</div>`
    ].join('\n')

  })

  return res.status(201).json({ data : feedback});
});

app.listen(3333, () => {
  console.log("HTTP server running!");
});

// SQLite ( Não precisa instalar nada, salva como arquivo físico )
// Prisma TESTE
