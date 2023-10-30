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
  props: {
    [key in keyof PropsType]: PropsType[keyof PropsType];
  } & {
    children: (ClonerElement | TextElement)[]
  }
}
