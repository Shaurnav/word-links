import { useEffect, useState } from "react"
import GuessEntry from "./guess-entry"
import styles from './styles.module.scss'

const initialState = {
  solution: ["hello", "world", "coin", "base"],
  layout: [
    {
      word: "hello",
      revealed: "hello",
    },
    {
      word: "world",
      revealed: "w",
    },
    {
      word: "coin",
      revealed: "",
    },
    {
      word: "base",
      revealed: "base",
    },
  ],
  clues: 0,
  choosing: true,
}

interface IWord {
  word: string,
  revealed: string,
}
interface IState {
  solution: string[],
  layout: IWord[],
  clues: number,
  choosing: boolean,  
}

//if we are not choosing, we've selected a given piece, then
//the background color for that specific gamepiece is solid...
export default function Board() {
  const [state, setState] = useState<IState>(initialState);

  useEffect(() => {

  }, [state?.choosing])

  return (
    <div className={styles.gameContainer}>
      <h1>game</h1>
      {
        state?.layout.map(({word, revealed}, index) => {
          let disabled = false;
          if (revealed.length === word.length) {
            disabled = true;
          }


          return <GuessEntry key={index} revealed={revealed} initialDisabled={disabled}/>
        })
      }
      
    </div>
  )

}