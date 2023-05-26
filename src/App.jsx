import { useState } from 'react'
import classnames from 'classnames'

// ReactComponent = WebComponent = CustomElement
// https://ko.legacy.reactjs.org/docs/react-component.html
// https://developer.mozilla.org/en-US/docs/Web/API/Web_components
// https://developer.mozilla.org/ko/docs/Web/API/Web_components/Using_custom_elements
function Square (props) {
  const { value, onSquareClick } = props
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

function Board ({ xIsNext, squares, onPlay, onCheckWinner }) {
  const winner = calculateWinner(squares)

  function handleClick (i) {
    const win = calculateWinner(squares)
    // console.log('** handleClick:', squares, win)
    // onClacWinner(win)
    if (win || squares[i]) {
      return
    }
    // const nextPlayer = xIsNext ? 'X' : 'O'
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    // if (xIsNext) {
    //   nextSquares[i] = 'X'
    // } else {
    //   nextSquares[i] = 'O'
    // }
    // console.log('****', winner)
    onPlay(nextSquares)
    // onGameFinish(winner !== null)
  }

  // const [finished, setFinished] = useState(winner !== null)

  // let status
  // if (winner) {
  //   status = 'Winner: ' + winner
  // } else {
  //   status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  // }
  const status = onCheckWinner(winner, xIsNext ? 'X' : 'O')

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

// JSX.Element -> React.Component
function Game ({ clss }) {
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

function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game
