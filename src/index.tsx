import { ClonerElement } from "../Cloner/types.ts"
import { Cloner } from "../Cloner/index.ts"

// const element = Cloner.createElement("h1", {id: "test"}, "Create Element Baby")
//
/** @jsx Cloner.createElement */
const element = (
  <div id="test">
    <h1 id="h1-test">This is an H1</h1>
    <h2 id="h2-test">This is an H2</h2>
  </div>
) as ClonerElement;

const container = document.getElementById("root")

Cloner.render(element, container!)
