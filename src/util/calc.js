import {
  MAX_MOVES,
  GAME_STATE,
  SPACE_STATE
} from '../constants'

const isDraw = (moveCount) => {
  return moveCount === MAX_MOVES
}

export function calculateWinner (squares, moveCount) {
  const lines = [
    /**
     * -------------
     * | X | X | X |
     * -------------
     * |   |   |   |
     * -------------
     * |   |   |   |
     * -------------
     */
    [0, 1, 2],
    /**
     * -------------
     * |   |   |   |
     * -------------
     * | X | X | X |
     * -------------
     * |   |   |   |
     * -------------
     */
    [3, 4, 5],
    /**
     * -------------
     * |   |   |   |
     * -------------
     * |   |   |   |
     * -------------
     * | X | X | X |
     * -------------
     */
    [6, 7, 8],
    /**
     * -------------
     * | X |   |   |
     * -------------
     * | X |   |   |
     * -------------
     * | X |   |   |
     * -------------
     */
    [0, 3, 6],
    /**
     * -------------
     * |   | X |   |
     * -------------
     * |   | X |   |
     * -------------
     * |   | X |   |
     * -------------
     */
    [1, 4, 7],
    /**
     * -------------
     * |   |   | X |
     * -------------
     * |   |   | X |
     * -------------
     * |   |   | X |
     * -------------
     */
    [2, 5, 8],
    /**
     * -------------
     * | X |   |   |
     * -------------
     * |   | X |   |
     * -------------
     * |   |   | X |
     * -------------
     */
    [0, 4, 8],
    /**
     * -------------
     * |   |   | X |
     * -------------
     * |   | X |   |
     * -------------
     * | X |   |   |
     * -------------
     */
    [2, 4, 6]
  ]

  if (isDraw(moveCount)) {
    return {
      winner: GAME_STATE.DRAW,
      winSpaces: []
    }
  }

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i]

    if (
      squares[a] === SPACE_STATE.EMPTY &&
      squares[b] === SPACE_STATE.EMPTY &&
      squares[c] === SPACE_STATE.EMPTY
    ) {
      continue
    }

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      let winner = null

      if (squares[a] === SPACE_STATE.PLAYER) {
        winner = GAME_STATE.PLAYER_WON
      } else {
        winner = GAME_STATE.AI_WON
      }

      return {
        winner,
        winSpaces: [a, b, c]
      }
    }
  }
  return null
}
