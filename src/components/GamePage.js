import Card from './Card'
import pyramids from "../media/pictures/pyramids.jpg";
import taipei101 from "../media/pictures/taipei-101.jpg";
import goldenGateBridge from "../media/pictures/golden-gate-bridge.jpg";
import colloseum from "../media/pictures/colloseum.jpg";
import React, { useState, useEffect } from 'react';

function GamePage(props) {

  const [score, updateScore] = useState(0);
  const [round, updateRound] = useState(0)
  const [picked, updatePicked] = useState([]);
  const [unpicked, updateUnpicked] = useState(
    [
      pyramids, taipei101, goldenGateBridge, colloseum
    ]
  );

  const chooseCards = () => {
    
  }

  console.log(pyramids);

  return (
    <div className="GamePage">


      <div className="infoArea">
        <p>0</p>
      </div>
        
      <div className="cardHolder">
        <Card source={pyramids} name="The Pyramids"/>
        <Card source={taipei101} name="Taipei 101"/>
        <Card source={goldenGateBridge} name="The Golden Gate Bridge"/>
        <Card source={colloseum} name="The Colloseum"/>
      </div>

      <div className="instructionsArea">
        Choose all 12 landmarks without choosing the same one more than once.
      </div>


    </div>
  )
}

export default GamePage;