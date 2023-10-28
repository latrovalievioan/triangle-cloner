export const render = (element, container) => {
  const dom = element.type === "TEXT_ELEMENT" 
    ? document.createTextNode("") 
    : document.createElement(element.type)

  Object.keys(element.props).forEach(k => {
    if (k === 'children') return
    dom[k] = element.props[k]
  })

  element.props.children.forEach(c => {
    render(c, dom)
  })

  container.appendChild(dom)
}
