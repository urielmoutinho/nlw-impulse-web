import { NodemailerMailProvider } from "../providers/nodemailer-mailprovider";
import { FeedBackRepository } from "../repositories/feedback-repository";

interface ISubmitFeedbackUseCase {
  type: string;
  comment: string;
  screenshot?: string;
}
export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedBackRepository,
    private mailProvider: NodemailerMailProvider
  ) {}

  async execute(request: ISubmitFeedbackUseCase) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
    if (!type) {
      throw new Error("Type is required");
    }
    if (!comment) {
      throw new Error("Comment is required");
    }
    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format");
    }
    await this.mailProvider.sendMail({
      subject: "Feedback",
      body: [
        `<p>Tipo do Feedback: ${type}`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}"/>` : '',
      ].join("\n"),
    });
  }
}
