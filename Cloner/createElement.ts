type Props = {
  [k: string]: any
}

type Children = (string | ClonerElement)[]

export type ClonerElement = {
  type: string,
  props: Partial<Props & Children>
}

export const createElement = (
  type: string,
  props: Props,
  ...children: Children
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
