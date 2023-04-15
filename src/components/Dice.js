import { useState, useEffect } from 'react'; 


export default function Dice(props) {



  return (
    <div>
      <img src={`images/dice${props.face}.png`}></img>
    </div>
    
  )
}