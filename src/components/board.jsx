import { calculateWinner } from '../util'
import { Square } from '../components'

export function Board ({ xIsNext, squares, onPlay, onCheckWinner }) {
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

  const list = Array.from({ length: 3 }, (_, i) => i).map(n => {
    return Array.from({ length: 3 }, (_, i) => !n ? i : n * 3 + i)
  })
  // console.log(list)

  return (
    <>
      <div className="status">
        <p className="text-center">{status}</p>
      </div>
      <div className="flex flex-col">
        {list.map((arr, i) => (
          <div key={i} className="board-row flex flex-row mx-auto">
            {arr.map(n => (
              <Square key={n} value={squares[n]} onSquareClick={() => handleClick(n)} />
            ))}
          </div>
        ))}
      </div>

      {/* <div className="board-row">
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
      </div> */}
    </>
  )
}

export default Board
