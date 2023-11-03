import { ClonerElement, TextElement } from './types';

const isHTMLElement = (element: HTMLElement | Text): element is HTMLElement => {
  return element.nodeName !== '#text';
};

export const render = (
  element: ClonerElement | TextElement,
  container: HTMLElement
): void => {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  Object.keys(element.props).forEach((k) => {
    if (k === 'children') return;

    dom[k] = element.props[k];
  });

  if (isHTMLElement(dom)) {
    element.props.children.forEach((c) => render(c, dom));
  }

  container.appendChild(dom);
};
