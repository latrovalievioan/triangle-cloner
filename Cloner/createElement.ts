import { ClonerElement, BaseElementProps, TextElement } from "./types.ts"

export const createElement = <PropsType extends BaseElementProps>(
  type: string,
  props: PropsType,
  ...children: (ClonerElement | Text | string)[]
): ClonerElement<PropsType> => ({
    type,
    props: {
      ...props,
      children: children.map(
        c => typeof c === 'string'
          ? createTextElement(c)
          : c as ClonerElement
      ),
    }
})


export const createTextElement = (text: string): TextElement => ({
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: text,
    children: []
  }
})
