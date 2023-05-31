import { useState } from 'react'
import classnames from 'classnames'
import { Header, Board } from '../components'

// JSX.Element -> React.Component
export function Game ({ clss }) {
  // const history2 = [null, null, null, null, null, null, null, null, null]
  // const [a, b] = [history2, function setHistory () {}]
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [finished, setFinished] = useState(false)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay (nextSquares) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares
    ]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function handleCheckWinner (winner, nextPlayer) {
    const bFinished = winner !== null
    let status
    if (bFinished) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + nextPlayer
    }

    setFinished(bFinished)
    console.log('** handleCheckWinner:', finished, winner)
    return status
  }

  function jumpTo (nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <>
      <Header />
      <div>
        <p><span>현재 플레이 횟수:</span> {currentMove}</p>
      </div>
      <div className={classnames(clss, { done: finished })}>
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            onCheckWinner={handleCheckWinner} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  )
}

export default Game
