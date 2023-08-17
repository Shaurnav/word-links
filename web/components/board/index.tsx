import GuessEntry from "./guess-entry"
import styles from './styles.module.scss'

const state = {
  solution: ["hello", "world", "coin", "base"],
  layout: ["hello", "", "", "base"],
  clues: 0,
}

export default function Board() {


  return (
    <div className={styles.gameContainer}>
      <h1>game</h1>
      <GuessEntry/>
      <GuessEntry/>
      <GuessEntry/>
    </div>
  )

}