import { getSpaceStateClass } from './util.js'
const classes = [
  'shadow-md',
  'h-24',
  'w-24',
  'rounded-lg',
  'bg-white',
  'text-7xl',
  'text-center',
  'cursor-default',
  'font-light',
  'flex',
  'items-center',
  'justify-center'
]

// ReactComponent = WebComponent = CustomElement
// https://ko.legacy.reactjs.org/docs/react-component.html
// https://developer.mozilla.org/en-US/docs/Web/API/Web_components
// https://developer.mozilla.org/ko/docs/Web/API/Web_components/Using_custom_elements
export function Square (props) {
  const { value, onSquareClick, gameState, winSpaces, index } = props
  const clss = [
    ...classes,
    // o-player, o-winner
    getSpaceStateClass(
      // 현재 박스의 값: O/X
      value,
      // 누구 차례냐?
      gameState,
      // 이긴 사람이 있다면? 이긴 사람이 만드 라인의 배열을 반환
      winSpaces,
      // 박스의 인덱스
      index
    )
  ].filter(Boolean).join(' ')
  return (
    <button className={clss} onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
