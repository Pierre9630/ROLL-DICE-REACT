import logo from './logo.svg';
import './App.css';
import {useState,ReactDOM} from 'react'; 


import Dice from './components/Dice';
import PlayerDash from './components/PlayerDash';
import Player from './class/Player';
import Winner from './components/Winner';
import Init from './components/Init';
//const winner = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  const [faceDice, setFaceDice] = useState(1); 
  const [player1, setPlayer1] = useState(new Player(1));
  const [player2, setPlayer2] = useState(new Player(2)); 
  let [isPlayer1, setIsPlayer1] = useState(true);
  const [winner, setWinner] = useState(null);
   
  
  const rollDice = () => {
    const value = Math.ceil(Math.random() * 6); 
    setFaceDice(value); 

    // affectation pour le joueur 1 ( à modifier par la suite ) 
    const copyPlayer = isPlayer1 ? {...player1} : {...player2} ;
    
    if(value === 1){
      
      copyPlayer.currentScore = 0;
      if(isPlayer1){
        setPlayer1(copyPlayer);
        switchPlayer(); 
      }else{
        setPlayer2(copyPlayer);
        switchPlayer();
      }
    } else{
      copyPlayer.currentScore += value; 
      if(isPlayer1){
        setPlayer1(copyPlayer); 
      }else{
        setPlayer2(copyPlayer);
      }
    }
    
    checkWinner();
    
    
  }
  const checkWinner = () => {
    if(player1.totalScore >= 100){
      setWinner(player1);
      
      
    }if (player2.totalScore >= 100){
      setWinner(player2); 
      
    }
  }
  //sauvegarde du score dans le total
  const init = () =>{
    setPlayer1(new Player(1));
    setPlayer2(new Player(2));
    setIsPlayer1(true);
    //<Init></Init>
  }
  const hold = () => {
    let currentPlayer = isPlayer1 ? {...player1} : {...player2} ;
    currentPlayer.totalScore += currentPlayer.currentScore;
    currentPlayer.currentScore = 0;
    if(isPlayer1){
      setPlayer1(currentPlayer);
      
    }else{
      setPlayer2(currentPlayer);
      
    }
    switchPlayer();
  }

  const switchPlayer = () =>{
    console.log("switch"); 
    console.log(isPlayer1);
    isPlayer1 ? setIsPlayer1(false) : setIsPlayer1(true) ;
    console.log(isPlayer1);
  }
  return (
    <div className="App">
      <p className='DashBoard'>Joueur Actuel : {isPlayer1 ? "le joueur 1": "le joueur 2"}</p>
      {winner && ( <Winner player={winner} setStateWinner={setWinner} init={init}/>)} {/* si winner existe alors afficher le Composant */}
      <div className={isPlayer1 ? "activePlayer" : ""}>

        <PlayerDash player={player1}></PlayerDash>
      </div>
      <div className={isPlayer1 ? "" : "activePlayer"}>

      <PlayerDash player={player2}></PlayerDash>
      </div>
      <Dice face={faceDice} />
      <button onClick={rollDice}>Lancer le Dé</button>
      <button onClick={hold}>Sauvegarde</button>
    </div>
  );
}

export default App;
