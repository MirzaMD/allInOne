import mole from './assets/img/mole.png'
import { Middle } from './Middle';
import { useState, useEffect } from 'react';
import { Footer } from './Footer.jsx'
import logo from '/logo.png'
import bl from '/logoBlack.png'
import { Link, Outlet } from 'react-router-dom'
function App() {
  const[hours,setHours]=useState(new Date().getHours())
  const[minutes,setMinutes]=useState(new Date().getMinutes());
  const[seconds,setSeconds]=useState(new Date().getSeconds())
  const[clock,setClock]=useState('');
  const[homePage,setHomePage]=useState(true);
  function updatePage(){
    setHomePage(false);
  }
  function resetPage(){
    setHomePage(true);
  }
  function updateClock(){
    const timer=setInterval(()=>{
      setHours(()=> new Date().getHours());
      setMinutes(()=>new Date().getMinutes());
      setSeconds(()=>new Date().getSeconds());
    },1000)
    setClock(()=>{
      const newClock=`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
      return newClock
    })
  }
  useEffect(()=>{
    updateClock();
  },[hours,minutes,seconds])
  // styles
  const titleStyle={
    color:"#FFDEAD",
    textShadow:"2px 2px 3px black",
  }
  const timeStyle={
    color:"#F6F1E9",
    textShadow:"2px 2px 3px black",
  }
  const navStyle={
    color:"#90EE90",
    textShadow:"2px 2px 5px black",
  }
  return (<section>
      <header className='flex flex-col items-center justify-center 
      bg-[linear-gradient(#040406,#D0F0C0,#030303)] h-[120px] gap-y-4
      border-b-2 border-[whitesmoke] rounded-lg hover:cursor-pointer'>
        <nav className='flex justify-around items-center w-full'>
          <img className=' h-12 sm:h-16 mt-2' src={bl}/>
          <h1 className='text-md sm:text-xl font-serif 'style={titleStyle}>Mirza's site</h1>
          <h1 className='font-mono text-md sm:text-2xl' style={timeStyle}>
            {clock}
          </h1>
        </nav>
        <nav className='flex justify-between items-center w-full'>
          <button className='text-lg sm:text-xl font-semibold ml-5'style={navStyle}
          onClick={resetPage}>Home</button>
          <Link to='/games'><button className='text-lg sm:text-xl font-semibold 'style={navStyle}
          onClick={updatePage}>Game</button></Link>
          <button className='text-lg sm:text-xl font-semibold mr-6'style={navStyle}>Tools</button>
        </nav>
      </header>
      {homePage?<Middle/>:<Outlet/>}
    <Footer/>
  </section>)
}

export default App
