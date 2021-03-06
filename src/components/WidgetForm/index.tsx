import { useState } from "react"
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./steps/FeedbackContentStep"
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep"
import { FeedbackType } from "./constants"

export const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSend, setFeedbackSend] = useState(false)

    const handleFeedbackType = (type: FeedbackType) => {
        setFeedbackType(type)
    }

    const handleRestartFeedback = () => {
        setFeedbackSend(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSend ? (
                <FeedbackSuccessStep
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep handleFeedbackType={handleFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSend(prevState => !prevState)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}
