import React, { useContext } from 'react';
import {QuizContext} from "../Helpers/Contexts"

const MainMenu = () => {
    const { gameState, setGameState,userName,setUserName } = useContext(QuizContext);
  return (
   
      <div className="Menu">
        <label>Enter Your Name:</label>
        <input
          type="text"
          placeholder="Tamara Atletisimo"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setGameState("playing");
          }}
        >
          Start Quiz
        </button>
      </div>
    );
  }
  
export default MainMenu;