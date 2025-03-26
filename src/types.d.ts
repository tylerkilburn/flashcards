export type ValueOf<T> = T[keyof T]

interface IFlashCard {
  id: string
  question: string
  answer: ReactNode
}

type IFlashCardNoId = Omit<IFlashCard, "id">
