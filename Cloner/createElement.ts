import { CreateElementProps, ElementChildren, ClonerElement } from "./types.ts"

export const createElement = (
  type: string,
  props: CreateElementProps,
  ...children: ElementChildren
): ClonerElement => ({
    type,
    props: {
      ...props,
      children: children.map(c => 
        typeof c === 'string'
          ? createTextElement(c)
          : c
      ),
    }
})


const createTextElement = (text: string) => ({
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: text,
    children: [],
  }
})
