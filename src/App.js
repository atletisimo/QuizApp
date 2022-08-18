import "./App.css";
import React, { useState,useContext } from "react";
import ReactDOM from "react-dom";
// import Calculator from "./components/Calculator";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from './Helpers/Contexts';
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  return (
    // <div className="calculator ">
    //   {/* <Calculator /> */}
    // </div>
    <div>
      <h1 style={{ position:'relative',fontSize:'30px',textAlign:'center' }}>Quiz App</h1>
      <QuizContext.Provider value={{score,setScore,gameState,setGameState, userName,
          setUserName}}>
     {gameState === "menu" && <MainMenu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
        </QuizContext.Provider>
    </div>
  );
}

export default App;
