import CloseButton from "../CloseButton";
import BugImageUrl from "../../assets/Bug.svg";
import IdeaImageUrl from "../../assets/Idea.svg";
import OtherImagUrl from "../../assets/Thought.svg";
import { useState } from "react";
import FeedbackTypeStep from "../Steeps/FeedbackTypeStep";
import FeedbackContentStep from "../Steeps/FeedbackContentStep";
import FeedbackSuccessType from "../Steeps/FeedbackSuccessType";
export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: BugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: IdeaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: OtherImagUrl,
      alt: "Imagem de uma nuvem",
    },
  },
};
export type FeedBackType = keyof typeof feedbackTypes;
function WidgetForm() {
  const [feedbackType, setFeedBackType] = useState<FeedBackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const handleRestartFeedBack = () => {
    setFeedbackSent(false)
    setFeedBackType(null);
  };
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessType onFeedbackRequested={handleRestartFeedBack}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedBackTypeChanged={setFeedBackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={feedbackType}
              onFeedBackRestartRequested={handleRestartFeedBack}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤ pela{" "}
        <a href="#" className="underline underline-offset-1">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}

export default WidgetForm;
