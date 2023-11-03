import Cloner from "../Cloner/index.ts"
import { ClonerElement } from "../Cloner/types.ts"


/** @jsx Cloner.createElement */
const element: ClonerElement = (
  <div id="div">
    <h1 id="hehe">HEHE</h1>
  </div>
)

console.log(element)

const el  = Cloner.createElement("div", {id: "div"}, "hehe")

const container = document.getElementById("root")

Cloner.render(element, container!)
