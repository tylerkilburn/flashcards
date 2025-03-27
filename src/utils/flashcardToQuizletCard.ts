import { IFlashCard, QuizletCard } from "../types"

export const flashcardToQuizletCard = (card: IFlashCard): QuizletCard => ({
  id: card.id,
  frontHTML: card.question,
  backHTML: card.answer,
})
