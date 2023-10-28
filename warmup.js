// WARMUP
// const element = <h1 title="foo">Triangle Cloner</h1>
// const container = document.getElementById("root")
// ReactDOM.render(element, container)
//
//
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Triangle Cloner"
  }
}

const container = document.getElementById("root")


const node = document.createElement(element.type)
node.title = element.props.title

const text = document.createTextNode("")
text.nodeValue = element.props.childen

node.appendChild(text)
container.appendChild(node)
