// ReactComponent = WebComponent = CustomElement
// https://ko.legacy.reactjs.org/docs/react-component.html
// https://developer.mozilla.org/en-US/docs/Web/API/Web_components
// https://developer.mozilla.org/ko/docs/Web/API/Web_components/Using_custom_elements
export function Square (props) {
  const { value, onSquareClick } = props
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
