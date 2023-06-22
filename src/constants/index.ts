export const GRID_LENGTH = 9

export const MAX_MOVES = 10

export const PLAYER = {
  AI: 'o',
  O: 'o',
  X: 'x'
}

export const SPACE_STATE = {
  PLAYER: PLAYER.X + '_filled',
  AI: PLAYER.O + '_filled',
  EMPTY: 'empty_space'
}

export const GAME_STATE = {
  PLAYER_TURN: 'player_turn',
  PLAYER_WON: 'player_won',
  AI_TURN: 'ai_turn',
  AI_WON: 'player_o_won',
  DRAW: 'game_draw',
  ERROR: 'game_error'
}
