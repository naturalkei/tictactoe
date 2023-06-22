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
    getSpaceStateClass(
      value,
      gameState,
      winSpaces,
      index
    )
  ].join(' ')
  return (
    <button className={clss} onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
