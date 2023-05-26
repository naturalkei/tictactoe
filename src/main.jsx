import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Game from './App.jsx'
import './index.scss'

const root = document.getElementById('root')
createRoot(root).render(
  <StrictMode>
    <Game clss="tictactoe game" />
  </StrictMode>
)
