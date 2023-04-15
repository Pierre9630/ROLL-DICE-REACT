import { useState, useEffect } from 'react';


export default function Init(props){
    const  { playerNumber} = props.player;
    
    return(
        <div className={"activePlayer"}></div>
    )
}