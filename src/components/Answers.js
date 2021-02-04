import { React } from "react";
import "./Answers.css";
import correct from "../assets/sounds/correct.mp3";
import wrong from "../assets/sounds/wrong.mp3";

const Answers = (props) => {
  let musicNotes = ["do", "re", "mi", "fa", "sol", "la", "si"];

  const correctAnswer = musicNotes[props.randomNumber % 7];
  musicNotes = musicNotes.filter((element) => element !== correctAnswer);

  const wrongAnswer1 =
    musicNotes[Math.floor(Math.random() * musicNotes.length)];

  musicNotes = musicNotes.filter((element) => element !== wrongAnswer1);

  const wrongAnswer2 =
    musicNotes[Math.floor(Math.random() * musicNotes.length)];

  musicNotes = musicNotes.filter((element) => element !== wrongAnswer2);

  const wrongAnswer3 =
    musicNotes[Math.floor(Math.random() * musicNotes.length)];

  musicNotes = musicNotes.filter((element) => element !== wrongAnswer3);

  const answers = [wrongAnswer1, wrongAnswer2, wrongAnswer3];

  const correctIndex = Math.floor(Math.random() * 4);

  answers.splice(correctIndex, 0, correctAnswer);

  let isAnswerTrue = false;

  let correctChoice = new Audio(correct);
  let wrongChoice = new Audio(wrong);

  ///Users/onurtellioglu/Desktop/web/projects/react-projects/piano-cards/src/assets/sounds/wrong.mp3

  return (
    <>
      <div className="answers-container">
        <div className="row">
          <button
            id="answer1"
            className="answer"
            onClick={() => {
              isAnswerTrue = correctIndex === 0;

              if (!isAnswerTrue) {
                if (!props.isMute) {
                  wrongChoice.play();
                }
                document.getElementById("answer1").classList.add("shake");
                setTimeout(function () {
                  document.getElementById("answer1").classList.remove("shake");
                }, 500);
              } else {
                if (!props.isMute) {
                  correctChoice.play();
                }
              }
              props.onClick(isAnswerTrue);
            }}
          >
            {answers[0]}
          </button>
          <button
            id="answer2"
            className="answer"
            onClick={() => {
              isAnswerTrue = correctIndex === 1;
              if (!isAnswerTrue) {
                if (!props.isMute) {
                  wrongChoice.play();
                }
                document.getElementById("answer2").classList.add("shake");
                setTimeout(function () {
                  document.getElementById("answer2").classList.remove("shake");
                }, 500);
              } else {
                if (!props.isMute) {
                  correctChoice.play();
                }
              }
              props.onClick(isAnswerTrue);
            }}
          >
            {answers[1]}
          </button>
        </div>
        <div className="row">
          <button
            id="answer3"
            className="answer"
            onClick={() => {
              isAnswerTrue = correctIndex === 2;
              if (!isAnswerTrue) {
                if (!props.isMute) {
                  wrongChoice.play();
                }
                document.getElementById("answer3").classList.add("shake");
                setTimeout(function () {
                  document.getElementById("answer3").classList.remove("shake");
                }, 500);
              } else {
                if (!props.isMute) {
                  correctChoice.play();
                }
              }
              props.onClick(isAnswerTrue);
            }}
          >
            {answers[2]}
          </button>
          <button
            id="answer4"
            className="answer"
            onClick={() => {
              isAnswerTrue = correctIndex === 3;
              if (!isAnswerTrue) {
                if (!props.isMute) {
                  wrongChoice.play();
                }
                document.getElementById("answer4").classList.add("shake");
                setTimeout(function () {
                  document.getElementById("answer4").classList.remove("shake");
                }, 500);
              } else {
                if (!props.isMute) {
                  correctChoice.play();
                }
              }
              props.onClick(isAnswerTrue);
            }}
          >
            {answers[3]}
          </button>
        </div>
      </div>
    </>
  );
};

export default Answers;
