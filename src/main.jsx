import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Games } from './Games.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Tictactoe } from './subGames/Tictactoe.jsx'
import { RockPapperScissor } from './subGames/RockPaperScissor.jsx'
import { WhackAMole } from './subGames/WhackAMole.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'games',
        element:<Games/>
      }
    ]
  },
  {
    path:'/tictactoe',
    element:<Tictactoe/>
  },
  {
    path:'/rockpaperscissor',
    element:<RockPapperScissor/>
  },{
    path:'/whackamole',
    element:<WhackAMole/>
  }
])
createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>,
)
