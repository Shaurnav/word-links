import { useEffect, useState } from "react"
import GuessEntry from "./guess-entry"
import styles from './styles.module.scss'
import { IState } from "@/interfaces";

const initialState = {
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

//if we are not choosing, we've selected a given piece, then
//the background color for that specific gamepiece is solid...
export default function Board() {
  const [state, setState] = useState<IState>(initialState);

  // useEffect(() => {
  //   console.log(state);
  // }, state.layout.map(({revealed}) => revealed));

  return (
    <div className={styles.gameContainer}>
      <h1>game</h1>
      {
        state?.layout.map(({word, revealed}, index) => {
          let disabled = false;
          if (revealed.length === word.length) {
            disabled = true;
          }

          console.log(revealed);
          return (
            <GuessEntry 
              key={index}
              revealed={revealed} 
              initialDisabled={disabled} 
              correctWord={word}
              state={state} 
              setState={setState}
            />
          );
        })
      }
      <h3>Clues Used: {state.clues}</h3>
      
    </div>
  )

}