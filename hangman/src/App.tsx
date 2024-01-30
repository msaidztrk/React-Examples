import { useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

// https://youtu.be/-ONUyenGnWw?t=1404  en son kaldigim dakika

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
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Lose Win
      </div>

      <HangmanDrawing />
      <HangmanWord />

      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>

    </div>
  );
}

export default App;
