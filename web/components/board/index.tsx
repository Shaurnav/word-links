import { IState } from "@/interfaces";
import { useEffect, useState } from "react";
import GuessEntry from "./guess-entry";
import styles from './styles.module.scss';

// Function to generate the initial state of the game board based on the date
const generateInitialState = () => {
  const date = new Date();
  const day = date.getDate(); // Get the current day of the month
  // Define your puzzles for each day of the month here
  const puzzles = [
    {
      layout: [
        { word: "brain", revealed: "brain" },
        { word: "stem", revealed: "s" },
        { word: "cell", revealed: "" },
        { word: "phone", revealed: "" },
        { word: "book", revealed: "" },
        { word: "worm", revealed: "" },
      ],
      clues: 0,
      choosing: true,
    },
    // Define other puzzles for other days of the month here...
    {
      layout: [
        { word: "shreyas", revealed: "shreyas" },
        { word: "loves", revealed: "l" },
        { word: "learning", revealed: "" },
        { word: "new", revealed: "" },
        { word: "things", revealed: "" },
        { word: "yay", revealed: "yay" },
      ],
      clues: 0,
      choosing: true,
    }

  ];

  // Use the day of the month to select the puzzle for the current day
  //const selectedPuzzle = puzzles[(day - 1) % puzzles.length]; // Subtract 1 because arrays are zero-indexed
  const selectedPuzzle = puzzles[0];

  return selectedPuzzle;
};


//if we are not choosing, we've selected a given piece, then
//the background color for that specific gamepiece is solid...
export default function Board() {
  const [state, setState] = useState<IState>(generateInitialState());
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleShareEmojis = () => {
    const shareEmojis = () => {
      const cluesUsed = state.clues;
      const totalEmojis = 6;
      const emojis = Array(totalEmojis).fill('⬛');
      for (let i = 0; i < cluesUsed; i++) {
        emojis[i] = '🟩';
      }
      return emojis.join(' ');
    };

    const copyToClipboard = () => {
      const emojis = shareEmojis();
      navigator.clipboard.writeText(emojis).then(() => {
        alert('Emojis copied to clipboard!');
      }, (err) => {
        console.error('Could not copy text: ', err);
      });
    };    
  };

  useEffect(() => {
    // Regenerate the initial state whenever the component mounts
    setState(generateInitialState());
  }, []);




  return (
    <div className={styles.gameContainer}>
      <h1>game</h1>
      {
        state?.layout.map(({word, revealed}, index) => {
          let disabled = false;
          if (revealed.length === word.length) {
            disabled = true;
          }

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
      {showModal && (
        <div className={styles.modal}>
          <h2>Clues Used: {state.clues}</h2>
          <button onClick={handleShareEmojis}>Share Emojis</button>
        </div>
      )}
      <button onClick={handleShowModal}>Show Clues Used</button>
    </div>
  )

}