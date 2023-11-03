export type BaseElementProps = {
  id?: string;
  key?: string
}

export type TextElement = {
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: string,
    children: never[]
  }
}

export type ClonerElement<PropsType extends BaseElementProps = BaseElementProps> = {
  type: string;
  props: PropsType & {
    children: (ClonerElement | TextElement)[]
  }
}
