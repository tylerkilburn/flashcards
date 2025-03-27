import { Flashcard } from "react-quizlet-flashcard"
import FlashcardProps from "react-quizlet-flashcard/dist/interfaces/IFlashcard"

export interface QuizletCard extends FlashcardProps {
  id: string
}

interface IFlashCard {
  id: string
  question: string
  answer: ReactNode
}

type IFlashCardNoId = Omit<IFlashCard, "id">
