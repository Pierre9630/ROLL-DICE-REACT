import { useState, useEffect } from 'react';

export default function Winner(props){
    const  {number} = props.player;
    const stateWinner = props.setStateWinner; 
    
    const [idSetTimeOut, setIdTimeOut] = useState(null); 
    console.log(props.player);
    useEffect(() => {
        const numberidSetTimeOut = setTimeout(()=>{
            stateWinner(null); 
            props.init(); 
        },6000)
        setIdTimeOut(numberidSetTimeOut);
        
    },[])
    return(
        <div className="Winner"> {`Le Joueur ${number} à gagné`}</div>
    )
}