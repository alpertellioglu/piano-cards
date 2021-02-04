import { React, useState } from "react";
import "./App.css";
import Answers from "./components/Answers";
import Question from "./components/Question";
import Settings from "./components/Settings";

function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 17)
  );
  const [isMute, setIsMute] = useState(false);
  const [isTreble, setIsTreble] = useState(true);
  const [isBass, setIsBass] = useState(true);

  const refreshQuestion = (isAnswerTrue) => {
    if (isAnswerTrue) {
      // if (isTreble && isBass) {
      //   return setRandomNumber(Math.floor(Math.random() * 34));
      // } else {
      //   return setRandomNumber(Math.floor(Math.random() * 17));
      // }
      return setRandomNumber(Math.floor(Math.random() * 17));
    }
  };

  function toggleTreble() {
    setIsTreble(!isTreble);
  }
  function toggleBass() {
    setIsBass(!isBass);
  }

  function toggleMute() {
    setIsMute(!isMute);
  }

  return (
    <>
      <Settings
        muteClicked={toggleMute}
        trebleClicked={toggleTreble}
        bassClicked={toggleBass}
        isMute={isMute}
        isTreble={isTreble}
        isBass={isBass}
      />
      <Question
        randomNumber={randomNumber}
        isTreble={isTreble}
        isBass={isBass}
      />
      <Answers
        randomNumber={randomNumber}
        onClick={refreshQuestion}
        isMute={isMute}
      />
    </>
  );
}

export default App;
