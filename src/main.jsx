// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Game } from './app'
import './styles/main.scss'

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <Game clss="tictactoe game" />
)
