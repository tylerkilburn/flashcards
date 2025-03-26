import Head from "next/head"

import { deck_SAA_CO3 } from "../decks/saa-c03"

export default function Home() {
  return (
    <>
      <Head>
        <title>Card Deck</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div
        className={``}
      >
        <main>
          {deck_SAA_CO3[0].question.toString()}
          {JSON.stringify(deck_SAA_CO3[0].answer)}
          </main>
      </div>
    </>
  )
}
