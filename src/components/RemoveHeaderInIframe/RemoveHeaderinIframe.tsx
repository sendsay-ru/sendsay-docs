import { useEffect } from 'react';
import { IFRAME_HIDDEN_CLASSES } from '../../theme/constants';

const isIniframe = () => {
  try {
    return window.self !== window.top;
  } catch (err) {
    return true;
  }
};

const removeBlocks = () => {
  const elementsToHide = IFRAME_HIDDEN_CLASSES.map(
    (className) => document.getElementsByClassName(className)[0]
  );

  elementsToHide.forEach((element) => element.classList.add('iframe-hidden'));
};

const RemoveHeaderinIframe = ({ content }) => {
  useEffect(() => {
    if (isIniframe()) {
      removeBlocks();
    }
  }, [content]);

  return null;
};

export default RemoveHeaderinIframe;
