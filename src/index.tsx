import Cloner from "../Cloner/index.ts"
import { ClonerElement } from "../Cloner/types.ts"


/** @jsx Cloner.createElement */
const element: ClonerElement = (
  <div id="div">
    <h1 id="hehe">HEHE</h1>
  </div>
)

const _element0 = Cloner.createElement("h1", {id: "hehe"})

const _element = Cloner.createElement("div", {id: "div"}, _element0)

const container = document.getElementById("root")


Cloner.render(element, container!)
Cloner.render(_element, container!)
