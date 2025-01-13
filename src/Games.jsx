import logo from '/logo.png'
import tictactoe from './assets/img/tictactoe.png'
import rockPaperScissors from './assets/img/rockPaperScissors.png'
import clickCounter from './assets/img/clickCounter.png'
import { Link } from 'react-router-dom'
export function Games(){
    return(
    <section className='grid w-[100vw] grid-cols-1 sm:grid-cols-3 items-center justify-items-center gap-10 m-2 text-white'>

        <Link to='/tictactoe'><div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={tictactoe}/>
            Tic Tac Toe
            </div></Link>
            <Link to='/rockpaperscissor'><div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={rockPaperScissors}/>
            Rock paper Scissor
            </div></Link>
            <Link to='/whackamole'><div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={clickCounter}/>
            Click Counter
            </div></Link>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-black flex flex-col justify-center items-center'>
            <img src={logo}/>
            Tic tac toe
            </div>
    </section>
    )
}