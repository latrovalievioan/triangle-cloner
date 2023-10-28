// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )
// const container = document.getElementById("root")
// ReactDOM.render(element, container)
//
// IS ACTUALLY --------xxxxxxxx---------xxxxxxxx----------xxxxxxxx---------xxxxxx---------
//
// const element = React.createElement(
//   "div",
//   { id: "foo" },
//   React.createElement("a", null, "bar"),
//   React.createElement("b")
// )
// const container = document.getElementById("root")
// ReactDOM.render(element, container)

export const createElement = (type, props, ...children) => {
  return ({
    type,
    props: {
      ...props,
      children,
    }
  })
}

export const createTextElement = (text) => {
  return ({
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    }
  })
}
