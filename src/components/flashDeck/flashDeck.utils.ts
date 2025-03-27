import { IFlashCard } from "@types"
import { RefObject, useEffect, useRef, useState } from "react"
import { useSwipeable, LEFT, RIGHT } from "react-swipeable"

import { flashcardToQuizletCard } from "@utils/flashcardToQuizletCard"
import { shuffleArray } from "@utils/shuffleArray"

type VoidCallback = () => void

type FlipRef = RefObject<VoidCallback>

type ControlRef = RefObject<{
  nextCard: () => void
  prevCard: () => void
  resetArray: () => void
}>

const FLASHCARD_DOM_SELECTOR = ".FlashcardArrayWrapper"

const EMPTY_CONTROL_REF = {
  nextCard: () => {},
  prevCard: () => {},
  resetArray: () => {},
}

export const useDeckState = (deck: IFlashCard[]) => {
  const { renderKey, rerender } = useForceRerender()
  const controlRef: ControlRef = useRef(EMPTY_CONTROL_REF)
  const flipRef = useRef<() => void>(() => {})
  const [currentCard, setCurrentCard] = useState(1)
  const [cards, setCards] = useState(deck.map(flashcardToQuizletCard))

  const shuffle = () => {
    setCards(shuffleArray(cards))
    setCurrentCard(1)
    rerender()
  }

  return {
    cards,
    setCurrentCard,
    controlRef,
    flipRef,
    renderKey,
    currentCard,
    shuffle,
  }
}

export const useKeyboardEvents = ({
  controlRef,
  flipRef,
  shuffle,
}: {
  controlRef: ControlRef
  flipRef: FlipRef
  shuffle: VoidCallback
}) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          {
            controlRef.current.nextCard()
          }
          break
        case "ArrowLeft":
          {
            controlRef.current.prevCard()
          }
          break
        case " ":
          {
            flipRef.current()
          }
          break
        case "s":
          {
            shuffle()
          }
          break
        case "Escape":
          {
            controlRef.current.resetArray()
          }
          break
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])
}

export const useGestureHandlers = ({
  controlRef,
  flipRef,
}: {
  controlRef: ControlRef
  flipRef: FlipRef
}) => {
  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      switch (eventData.dir) {
        case LEFT:
          controlRef.current.nextCard()
          break
        case RIGHT:
          controlRef.current.prevCard()
          break
      }
    },
  })

  return { ...swipeHandlers, onClick: () => flipRef.current() }
}

const useForceRerender = () => {
  const [renderKey, setRenderKey] = useState(0)
  return {
    renderKey,
    rerender: () => setRenderKey((renderKey) => renderKey + 1),
  }
}
