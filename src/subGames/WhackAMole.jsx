import { useState, useEffect,createContext } from 'react'
import { WhackResults } from './WhackResults';
import { ClickHeader } from './ClickHeader'
export const pointsProvider=createContext();
export function WhackAMole(){
    const[burrows,setBurrows]=useState(Array(50).fill(false))
    const[points,setPoints]=useState(0)
    const[start,setStart]=useState(false);
    const[stop,setStop]=useState(false)
    function updateBurrows(){
        setBurrows(()=>{
            const newBurrows=Array(50).fill(false)
            const rand=Math.floor(Math.random()*50)
            newBurrows[rand]=true;
            return newBurrows
        })
        setPoints((cur)=>cur+1)
        setStart(true)
    }
    useEffect(()=>{
        const rand=Math.floor(Math.random()*50) 
        setBurrows(()=>{
            const NewBurrows=Array(50).fill(false)
            NewBurrows[rand]=true
            return NewBurrows
        })
        return;
    },[])
    return(
        <pointsProvider.Provider value={{points,setPoints,start,setStart,stop,setStop}}>
        <section>
        <ClickHeader/>
        
    <section className='grid grid-cols-5 sm:grid-cols-10 gap-y-1 gap-x-0 sm:gap-x-2 sm:gap-y-3 w-full h-full mt-1'>
        {burrows.map((v,i)=>(
            <div key={i} className='h-[50px] sm:h-[100px] 
            w-[50px] sm:w-[100px] 
            rounded-full bg-[brown]
            cursor-pointer  bg-[radial-gradient(#030303,#D0F0C0,#040406)]'
           style={{visibility:v?'visible':'hidden'}} onClick={updateBurrows}></div>
        ))}
    </section>
    <WhackResults/>
    </section>
    </pointsProvider.Provider>
    )

}