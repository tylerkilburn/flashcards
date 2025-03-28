import Head from "next/head"

import { deck_SAA_CO3 } from "../decks/saa-c03"
import { FlashDeck } from "../components/flashDeck/flashDeck"

export default function Home() {
  return <FlashDeck deck={deck_SAA_CO3} />
}
