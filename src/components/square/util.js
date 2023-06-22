import {
  // SPACE_STATE,
  GAME_STATE
  // PLAYER
} from '../../constants'

export const getSpaceStateClass = (value, gameState, winSpaces, spaceIndex) => {
  let space = ''

  if (value === 'O') {
    space += 'o-player'

    if (gameState === GAME_STATE.AI_WON && winSpaces.includes(spaceIndex)) {
      space += ' o-winner'
    }
  }

  if (value === 'X') {
    space += 'x-player'

    if (gameState === GAME_STATE.PLAYER_WON && winSpaces.includes(spaceIndex)) {
      space += ' x-winner'
    }
  }

  // console.log(value, space)

  return space
}
