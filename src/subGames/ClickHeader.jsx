import { pointsProvider } from "./WhackAMole"
import { useContext,useState,useEffect,createContext } from "react"
export function ClickHeader(){
    const {points,setPoints,start,setStart,stop,setStop}=useContext(pointsProvider)
    const[timer,setTimer]=useState(30);
    useEffect(()=>{
        let intervalID;
        if(start){
            intervalID=setInterval(()=>{
                setTimer((cur)=>{
                    if(cur===0){
                        setStop(true)
                        clearInterval(intervalID)
                        setStart(false)
                        return 30;
                    }
                    return cur-1;
                })
            },1000)
        }
    },[start,setStart])
    const timeStyle={
        color:"#F6F1E9",
        textShadow:"2px 2px 3px black",
      }
    return(
        <section className='flex justify-around items-center 
        w-full bg-blue-200 h-[100px] text-xl sm:text-3xl 
        bg-[linear-gradient(#040406,#D0F0C0,#030303)] font-serif' style={timeStyle}>
            <h1>click Counter</h1>
            <h1>clicks:{points}</h1>
            <h1>Time:{timer}</h1>
        </section>
    )
}