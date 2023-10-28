// const element = <h1 title="foo">Triangle Cloner</h1>
// const container = document.getElementById("root")
// ReactDOM.render(element, container)
//
import { Cloner } from "./Cloner/index.js"

// const element = createElement("h1", {id: 1}, "Triangle Cloner");
//
/** @jsx Cloner.createElement */
const element = (
  <h1 id={1}>Triangle Cloner</h1>
)

const container = document.getElementById("root")

const node = document.createElement(element.type)
node.id = element.props.id


const textElement = Cloner.createElement(
  element.props.children[0].type,
  element.props.children[0].props
)

const text = document.createTextNode("")
text.nodeValue = textElement.props.nodeValue

node.appendChild(text)
container.appendChild(node)
