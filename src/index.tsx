import Cloner from "../Cloner/index.ts"
import { ClonerElement } from "../Cloner/types.ts"


/** @jsx Cloner.createElement */
const element: ClonerElement = (
  <div id="div">
    <h1 id="hehe">HEHE</h1>
  </div>
)

const container = document.getElementById("root")

Cloner.render(element, container!)
