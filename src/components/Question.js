import { React } from "react";
import "./Question.css";
import note0 from "../assets/bass/0.png";
import note1 from "../assets/bass/1.png";
import note2 from "../assets/bass/2.png";
import note3 from "../assets/bass/3.png";
import note4 from "../assets/bass/4.png";
import note5 from "../assets/bass/5.png";
import note6 from "../assets/bass/6.png";
import note7 from "../assets/bass/7.png";
import note8 from "../assets/bass/8.png";
import note9 from "../assets/bass/9.png";
import note10 from "../assets/bass/10.png";
import note11 from "../assets/bass/11.png";
import note12 from "../assets/bass/12.png";
import note13 from "../assets/bass/13.png";
import note14 from "../assets/bass/14.png";
import note15 from "../assets/bass/15.png";
import note16 from "../assets/bass/16.png";
import note17 from "../assets/bass/17.png";

const Question = (props) => {
  const bassQuestions = [
    note0,
    note1,
    note2,
    note3,
    note4,
    note5,
    note6,
    note7,
    note8,
    note9,
    note10,
    note11,
    note12,
    note13,
    note14,
    note15,
    note16,
    note17,
  ];

  //const trebleQuestions = [];
  let questionImg = bassQuestions[props.randomNumber];

  //TODO
  // if (props.randomNumber < 17) {
  //   questionImg = bassQuestions[props.randomNumber];
  // } else {
  //   questionImg = trebleQuestions[props.randomNumber];
  // }

  return (
    <>
      <div className="question-container">
        <img src={questionImg} alt="test-note" className="note" />
      </div>
    </>
  );
};

export default Question;
