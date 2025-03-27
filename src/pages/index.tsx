import Head from "next/head"

import { deck_SAA_CO3 } from "../decks/saa-c03"
import { FlashDeck } from "../components/flashDeck/flashDeck"

export default function Home() {
  return (
    <>
      <Head>
        <title>Card Deck</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={``}>
        <main>
          <FlashDeck deck={deck_SAA_CO3} />
        </main>
      </div>
    </>
  )
}
