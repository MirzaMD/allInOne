import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
export function RockPapperScissor(){
    
const rock= <FontAwesomeIcon icon={faHandRock} className="text-[#808080] h-[60px] sm:h-[100px]" />
const paper= <FontAwesomeIcon icon={faHandPaper}  className="text-[#808080] h-[60px] sm:h-[100px]" />
const scissor= <FontAwesomeIcon icon={faHandScissors}  className="text-[#808080] h-[60px] sm:h-[100px]" />

const botrock= <FontAwesomeIcon icon={faHandRock}  className="text-[#90EE90] h-[60px] sm:h-[100px]" />
const botpaper= <FontAwesomeIcon icon={faHandPaper}  className="text-[#90EE90] h-[60px] sm:h-[100px]" />
const botscissor= <FontAwesomeIcon icon={faHandScissors}  className="text-[#90EE90] h-[60px] sm:h-[100px]" />
let rand;
const[move,setMove]=useState(null)
const[playerMove,setPlayerMove]=useState(rock);
const[botMove,setBotMove]=useState(botrock);
const[wins,setWins]=useState(0);
const[loses,setLoses]=useState(0);
const[draws,setDraws]=useState(0);
const[start,setStart]=useState(false);
const[triggerBotMove,setTriggerBotMove]=useState(false);

const player=[rock,paper,scissor]
function updatePlayerMove(val){
    setMove(val)
    setStart(true);
    setPlayerMove(()=>{
        let newMove;
        if(val==='r'){
            newMove=rock;
        setTriggerBotMove(true)
    }
        else if(val==='p'){
            newMove=paper;
            setTriggerBotMove(true)
        }
        else{
        newMove=scissor;
        setTriggerBotMove(true)}
    return newMove;
    })
}
function winnerCheck(){
    if(move==='r' && rand===0){
        setDraws((cur)=>cur+1)
      }
   else if(move==='r' && rand===1){
    setLoses((cur)=>cur+1)
  }
  else if(move==='r' && rand===2){
    setWins((cur)=>cur+1)
  }
  else if(move==='p' && rand===0){
    setWins((cur)=>cur+1)
  }
  else if(move==='p' && rand===1){
    setDraws((cur)=>cur+1)
  }
  else if(move==='p' && rand===2){
    setLoses((cur)=>cur+1)
  }
  else if(move==='s' && rand===0){
    setLoses((cur)=>cur+1)
  }
  else if(move==='s' && rand===1){
    setWins((cur)=>cur+1)
  }
  else{
    setDraws((cur)=>cur+1)
  }
}
useEffect(()=>{
    if(triggerBotMove){
        rand=Math.floor(Math.random()*3)
        switch(rand){
            case 0:setBotMove(botrock); break;
            case 1:setBotMove(botpaper);break;
            case 2:setBotMove(botscissor)
        }
        setTriggerBotMove(false);
    }
},[triggerBotMove,botMove])
useEffect(()=>{
    if(start)
winnerCheck();
},[start,playerMove])
const navStyle={
    color:"#90EE90",
    textShadow:"2px 2px 5px blue",
  }
return(<section className='flex justify-center flex-col items-center w-full
       absolute top-[200px]'>
        <nav className='flex justify-center items-center gap-x-7'>
        <button>{playerMove}</button>
        <button>{botMove}</button>
        </nav>
        <nav className='flex justify-center items-center gap-x-7'>
            <button onClick={()=>updatePlayerMove('r')}>{rock}</button>
            <button onClick={()=>updatePlayerMove('p')}>{paper}</button>
            <button onClick={()=>updatePlayerMove('s')}>{scissor}</button>
        </nav>
        <nav className='flex justify-start
         items-center w-full gap-x-10
          text-white text-md sm:text-2xl ml-10 mt-[80px] h-[300px]*
          font-mono' style={navStyle}>
            <h1>Wins:{wins}</h1>
            <h1>Loses:{loses}</h1>
            <h1>Draws:{draws}</h1>
        </nav>
</section>)
}