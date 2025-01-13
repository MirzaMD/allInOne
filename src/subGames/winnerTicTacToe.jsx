import { winnerProvider } from "./Tictactoe";
import { useContext } from 'react'
export function WinnerTictactoe(){
    const{winner,displayMessage,setDisplayMessage}=useContext(winnerProvider);
    function unrender(){
        setDisplayMessage(false);
    }
    const navStyle={
        color:"#90EE90",
        textShadow:"2px 2px 5px black",
      }
      const timeStyle={
        color:"#F6F1E9",
        textShadow:"2px 2px 3px black",
      }
    return(
       displayMessage?(
       <div className='flex justify-center items-center
        flex-col gap-4 absolute
        bottom-[250px] sm:bottom-[200px] w-[200px] sm:w-[480px] h-[200px] sm:h-[300px] cursor-pointer
        left-[50px] sm:left-[350px] text-[1.5rem] sm:text-[3rem]
        bg-[linear-gradient(#040406,#D0F0C0,#030303)]
        rounded-3xl'onClick={unrender} style={navStyle}>
        <h1>{winner}</h1>
        <p className="text-sm sm:text-lg" style={timeStyle}>click to continue.</p>
          </div>):null
       )
}