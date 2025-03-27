import { IFlashCardNoId } from "../types"
import md5 from "md5"

export const hashCardToId = (card: IFlashCardNoId): string =>
  md5(card.question + JSON.stringify(card.question))
