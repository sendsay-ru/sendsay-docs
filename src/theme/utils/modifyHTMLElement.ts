interface ModifyHTMLElement {
  element: HTMLElement;
  styles?: Partial<CSSStyleDeclaration>;
  className?: string;
}

export const modifyHTMLElement = ({ element, styles, className }: ModifyHTMLElement) => {
  Object.assign(element.style, styles);

  element.classList.add(className);
};
