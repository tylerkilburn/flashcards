import styles from "./deckControls.module.scss"

import type { FC } from "react"
import { ControlRef, FlipRef } from "../flashDeck.utils"

export interface IDeckControlsProps {
  className?: string
  controlRef: ControlRef
  currentCard: number
  deckLength: number
  flipRef: FlipRef
}

export const DeckControls: FC<IDeckControlsProps> = ({
  className,
  controlRef,
  currentCard,
  deckLength,
  flipRef,
}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.cardCount}>
        {currentCard} / {deckLength}
      </div>
      {/* <div> Categories </div> */}
    </div>
  )
}
