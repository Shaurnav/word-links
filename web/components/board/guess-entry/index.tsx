import { ChangeEvent, ReactHTMLElement, useState } from 'react';
import styles from './styles.module.scss'
import React from 'react';

export type GuessEntryProps = {
  revealed: string,
  initialDisabled: boolean,
}

//note to self, if we want to fully lock in the user, we are 
//most likely going to have to use inputRef in order to ensure
//that the user can't select anything else...
export default function GuessEntry({revealed, initialDisabled}: GuessEntryProps) {
  const [input, setInput] = useState(revealed);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const inputRef = React.useRef<HTMLInputElement>();

  // const handleBlur = () => {
  //   inputRef?.current?.focus();
  // };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    
  }

  const handleSelect = () => {
    console.log('hello');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= revealed.length) {
      setInput(event.target.value);
    }     
  }

  return (
   <input 
    className={!disabled ? styles.input : styles.startAndEnd}
    disabled={disabled}
    type='text' 
    value={input} 
    onChange={handleChange}  
    onClick={handleSelect}
    onBlur={() => setInput(revealed)}
    // ref={inputRef as React.MutableRefObject<HTMLInputElement>}
   />
  );
}