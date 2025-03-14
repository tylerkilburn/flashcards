export type ValueOf<T> = T[keyof T]

interface IFlashCard {
  question: string
  answer: ReactNode
}
