import { pointsProvider } from "./WhackAMole";
import {  useContext } from "react";
export function WhackResults(){
    const {points,setPoints,start,setStart,stop,setStop}=useContext(pointsProvider);
function resetGame(){
    setStart(false);
    setPoints(0);
    setStop(false);
}
const timeStyle={
    color:"#F6F1E9",
    textShadow:"2px 2px 3px black",
  }
return(
stop?
<div className="flex justify-center items-center 
gap-2 flex-col w-[200px] sm:w-[300px] h-[100px]
 sm:h-[200px]
rounded-xl bg-white relative bottom-[500px] 
left-[50px] sm:left-[550px] cursor-pointer
bg-[linear-gradient(#040406,#D0F0C0,#030303)]
 text-xl sm:text-3xl font-extrabold"
 onClick={resetGame} style={timeStyle}>
    <h1>Your clicks:{points}</h1>
    <p>click to continue</p>
</div>
:null)
}