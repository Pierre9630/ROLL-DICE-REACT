import { useState, useEffect } from 'react'; 

export default function PlayerDash(props){

    const  {currentScore, totalScore, playerNumber} = props.player; 

    return (
        <div className="players">
          <div className="active-player column">
                <div className="led isactive"></div>
                <div className="player-name">Player {playerNumber}</div>
                <h1 className="score">{totalScore}</h1>
                <div className="current">
                    <h4>CURRENT</h4>
                    <h4 className="currentScore">{currentScore}</h4>
                </div>
            </div>
        </div>
    )
}