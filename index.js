// const element = <h1 title="foo">Triangle Cloner</h1>
// const container = document.getElementById("root")
// ReactDOM.render(element, container)
//
import { createTextElement, createElement } from "./createElement.js"

const element = createElement("h1", {id: 1}, "Triangle Cloner");

const container = document.getElementById("root")

const node = document.createElement(element.type)
node.id = element.props.id

const textElement = createTextElement(element.props.children)
const text = document.createTextNode(textElement.props.nodeValue)

node.appendChild(text)
container.appendChild(node)
