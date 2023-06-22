import { GAME_STATE } from '../../constants'

export const getSpaceStateClass = (value, gameState, winSpaces, spaceIndex) => {
  let space
  if (value !== 'O' && value !== 'X') return
  const player = value.toLowerCase()
  const state = player === 'o' ? GAME_STATE.AI_WON : GAME_STATE.PLAYER_WON
  space = player + '-player'
  if (winSpaces.includes(spaceIndex) && gameState === state) {
    space += ` ${player}-winner`
  }
  // console.log(value, space)
  return space
}
