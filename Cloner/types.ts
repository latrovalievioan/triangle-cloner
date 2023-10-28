export type CreateElementProps = {
  [k: string]: any
}

export type ElementChildren = ClonerElement[]

export type ClonerTextElementProps = {
    nodeValue: string;
    children: never[];
  }

export type ClonerElementProps = 
  | { 
    [k: string]: any;
    children: ElementChildren;
  } 
  | ClonerTextElementProps

export type ClonerElement = {
  type: string;
  props: ClonerElementProps
}
