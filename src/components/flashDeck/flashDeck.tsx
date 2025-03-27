import styles from "./flashDeck.module.scss"

import { type FC } from "react"
import { FlashcardArray } from "react-quizlet-flashcard"

import { IFlashCard } from "@types"
import {
  FLASHCARD_ARRAY_STYLE,
  FLASHCARD_CONTENT_STYLE,
  FLASHCARD_STYLE,
} from "./flashDeck.style"
import {
  useDeckState, useGestureHandlers,
  useKeyboardEvents
} from "./flashDeck.utils"

export interface IFlashDeckProps {
  deck: IFlashCard[]
}
export const FlashDeck: FC<IFlashDeckProps> = ({ deck }) => {
  const {
    cards,
    controlRef,
    currentCard,
    flipRef,
    renderKey,
    setCurrentCard,
    shuffle,
  } = useDeckState(deck)

  useKeyboardEvents({ controlRef, flipRef, shuffle })
  const gestureHandlers = useGestureHandlers({ controlRef, flipRef })

  // Manage event handlers
  // Manage state
  // Manage show / hide card
  // Manage gestures

  // Keyboard
  const handleArrowLeft = () => {}
  const handleArrowRight = () => {}
  const handleSpace = () => {}

  // Gesture
  const handleSwipeLeft = () => {}
  const handleSwipeRight = () => {}

  // Hide
  const handleHideClick = () => {}
  const handleUndoHideClick = () => {}

  return (
    <div className={styles.root}>
      <div {...gestureHandlers}>
        <FlashcardArray
          backCardStyle={FLASHCARD_STYLE}
          backContentStyle={FLASHCARD_CONTENT_STYLE}
          cards={cards as any[]}
          controls={false}
          currentCardFlipRef={flipRef}
          FlashcardArrayStyle={FLASHCARD_ARRAY_STYLE}
          forwardRef={controlRef}
          frontCardStyle={FLASHCARD_STYLE}
          frontContentStyle={FLASHCARD_CONTENT_STYLE}
          key={renderKey}
          onCardChange={(id, index) => setCurrentCard(index)}
          showCount={false}
        />
      </div>

      <p>
        {currentCard} / {deck.length}
      </p>
      <button onClick={() => controlRef.current.prevCard()}>Prev</button>
      <button onClick={() => controlRef.current.resetArray()}>Reset</button>
      <button onClick={() => controlRef.current.nextCard()}>Next</button>
      <button onClick={() => flipRef.current()}>Flip</button>
    </div>
  )
}
