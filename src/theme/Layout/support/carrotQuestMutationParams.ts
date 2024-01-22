import { modifyHTMLElement } from '../../utils';

const MESSENGER_COLLAPSED_STYLES = {
  right: '73px',
  bottom: '10px',
};

const NO_BORDER_CLASS = 'no-border';

export const CARROT_QUEST_MUTATION_PARAMS = [
  {
    id: 'carrotquest-messenger-collapsed-container',
    callback: (element: HTMLElement) =>
      modifyHTMLElement({ element, styles: MESSENGER_COLLAPSED_STYLES }),
  },
  {
    id: 'carrot-messenger-collapsed-frame',
    callback: (element: HTMLElement) => modifyHTMLElement({ element, className: NO_BORDER_CLASS }),
  },
  {
    id: 'carrot-messenger-frame',
    callback: (element: HTMLElement) => modifyHTMLElement({ element, className: NO_BORDER_CLASS }),
  },
];
