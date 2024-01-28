import { useState } from "react";
import words from "./wordList.json";

// https://youtu.be/-ONUyenGnWw?t=449  en son kaldigim dakika

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessesLeft, setGuessesLeft] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}>

<div style={{
  fontSize : "2rem", textAlign: "center",
}}>
  Lose 
  Win
</div>

<HangmanDrawing/>
<HangmanWord/>
<Keyboard/>

      </div>
  );
}

export default App;
