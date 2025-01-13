import { useState, useEffect, createContext } from 'react'
import { WinnerTictactoe } from './winnerTicTacToe';
export const winnerProvider=createContext();
export function Tictactoe(){
    const[cells,setCells]=useState(Array(9).fill(''));
    const[move,setMove]=useState('X')
    const[botMove,setBotMove]=useState(false);
    const[clearBoard,setClearBoard]=useState(false);
    const[winner,setWinner]=useState(null);
    const[displayMessage,setDisplayMessage]=useState(false);
    function checkWinner(arr){
    const winningCombination=[
        //rows
        [0,1,2],[3,4,5],[6,7,8],
       //columns
       [0,3,6],[1,4,7],[2,5,8],
       //diagnols
       [0,4,8],[2,4,6]   
    ]
    for(let combinations of winningCombination){
        const[a,b,c]=combinations;
        if(arr[a]!=='' && arr[a]===arr[b] && arr[b]===arr[c]){
            setWinner(`${arr[a]} is the winner!`);
            setDisplayMessage(true);
            setClearBoard(true);
            return;
        }
    }
    if(!cells.includes('')){
        setClearBoard(true);
        setDisplayMessage(true);
        setWinner("It's a tie.")
    }
    }
    function resetBoard(){
        if(clearBoard){
            setCells(Array(9).fill(''));
            setClearBoard(false);
        }
    }
    function updateCells(index){
       setCells((cur)=>{
        if(cur[index]!=='')
            return cur;
        const newCells=[...cur];
        newCells[index]=move;
        return newCells;
       })
       if (cells[index] === '') {
        setMove((cur) => (cur === "X" ? "O" : "X"));
        setBotMove(true);
    }  
    }
    useEffect(()=>{
        if(!cells.includes('')) return;
        if(botMove){
        let rand;
        do{
            rand=Math.floor(Math.random()*9)
        }while(cells[rand]!=="")

          setTimeout(()=>{
            updateCells(rand);
            setBotMove(false)
          },230)
            
}
    },[cells,botMove]);
useEffect(()=>{
    const timer=setTimeout(()=>{
        checkWinner(cells);
        resetBoard();
    },220)
    return ()=>clearTimeout(timer)
},[cells,clearBoard])
const box={
    boxShadow:'7px 8px 4px #90EE90'
}
    return(
        <winnerProvider.Provider value={{winner,displayMessage,setDisplayMessage}}>
        <section className='grid grid-cols-3 gap-2 sm:gap-4 w-[300px] relative top-[200px] sm:top-[150px] sm:w-[600px] m-auto '>
        {cells.map((v,i)=>(
            <button onClick={()=>updateCells(i)}
            className='h-[80px] sm:h-[120px] w-[80px] sm:w-[120px]
            rounded-md font-extrabold text-xl sm:text-3xl
            border-[#b1d4a0] border-2 bg-black text-[#90EE90]'
            style={box}>{v}</button>
        ))}
    </section>
    <WinnerTictactoe/>
    </winnerProvider.Provider>
    )
}