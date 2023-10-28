import { ClonerElement } from "../Cloner/createElement.ts"
import { Cloner } from "../Cloner/index.ts"

// const element = Cloner.createElement("h1", {id: "test"}, "Create Element Baby")
//
/** @jsx Cloner.createElement */
const element = (
  <h1 id="test">Create Element Baby</h1>
) as ClonerElement;

const container = document.getElementById("root")

const node = document.createElement(element.type)
node.id = element.props.id

const text = document.createTextNode("")
text.nodeValue = element.props.children[0].props.nodeValue

node.appendChild(text)
container?.appendChild(node)
