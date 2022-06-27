import express from "express";
import { NodemailerMailProvider } from "./providers/nodemailer-mailprovider";
import { PrismFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();



routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedBackRepository = new PrismFeedbacksRepository();
  const nodemailerProvider = new NodemailerMailProvider()
  const submitfeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedBackRepository,
    nodemailerProvider
  );

  await submitfeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });


  return res.status(201).send();
});
