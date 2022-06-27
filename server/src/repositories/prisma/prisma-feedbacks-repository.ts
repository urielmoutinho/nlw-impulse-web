import { prisma } from "../../services/prisma";
import { FeedBackRepository, ICreateFeedback } from "../feedback-repository";

export class PrismFeedbacksRepository implements FeedBackRepository {
  async create({ type, comment, screenshot }: ICreateFeedback): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
