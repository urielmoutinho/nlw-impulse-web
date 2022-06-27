import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedbackUSeCase = new SubmitFeedbackUseCase(
  {
    create: createFeedbackSpy,
  },
  { sendMail: sendMailSpy }
);
describe("Submit FeedBack", () => {
  it("should be able to send a feedback", async () => {
    await expect(
      submitFeedbackUSeCase.execute({
        type: "BUG",
        comment: "Example",
        screenshot: "data:image/png;base64",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  });

  it("should not be able to send a feedback without type", async () => {
    await expect(
      submitFeedbackUSeCase.execute({
        type: "",
        comment: "Example",
        screenshot: "data:image/png;base64,",
      })
    ).rejects.toThrow();
  });
  it("should not be able to send a feedback without comment", async () => {
    await expect(
      submitFeedbackUSeCase.execute({
        type: "teste",
        comment: "",
        screenshot: "data:image/png;base64",
      })
    ).rejects.toThrow();
  });
  it("should not be able to send a feedback with invalid screenshot", async () => {
    await expect(
      submitFeedbackUSeCase.execute({
        type: "teste",
        comment: "teste",
        screenshot: "123",
      })
    ).rejects.toThrow();
  });
});
