import React, { useState, useContext } from "react";
import {QuizContext} from "../Helpers/Contexts"
import {Questions} from '../Helpers/QuestionBank'
const Quiz = () => {
    const {score,setScore,setGameState}=useContext(QuizContext)
    const [currentQuestion,setCurrentQuestion]=React.useState(0)
    const [optionChosen, setOptionChosen] = React.useState("");
    const chooseOption = (option) => {
      setOptionChosen(option);
    };
  
    const nextQuestion = () => {
      if (Questions[currentQuestion].asnwer == optionChosen) {
        setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
    };
  
    const finishQuiz = () => {
      if (Questions[currentQuestion].asnwer == optionChosen) {
        setScore(score + 1);
      }
      setGameState("finished");
    };
  
    return (
      <div className="Quiz">
        <h1>{Questions[currentQuestion].prompt}</h1>
        <div className="questions">
          <button
            onClick={() => {
              chooseOption("optionA");
            }}
          >
            {Questions[currentQuestion].optionA}
          </button>
          <button
            onClick={() => {
              chooseOption("optionB");
            }}
          >
            {Questions[currentQuestion].optionB}
          </button>
          <button
            onClick={() => {
              chooseOption("optionC");
            }}
          >
            {Questions[currentQuestion].optionC}
          </button>
          <button
            onClick={() => {
              chooseOption("optionD");
            }}
          >
            {Questions[currentQuestion].optionD}
          </button>
        </div>
  
        {currentQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz} id="nextQuestion">
            Finish Quiz
          </button>
        ) : (
          <button onClick={nextQuestion} id="nextQuestion">
            Next Question
          </button>
        )}
      </div>
    );
  }

export default Quiz;