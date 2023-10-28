import { Cloner } from "./Cloner/index.js"


/** @jsx Cloner.createElement */
const element = (
  <h1 id={1}> Triangle Cloner </h1>
)

const root = document.getElementById("root")
Cloner.render(element, root)
