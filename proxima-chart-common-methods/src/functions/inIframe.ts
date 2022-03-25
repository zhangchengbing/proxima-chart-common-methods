export const inIframe = (): boolean => {
  try {
    return window.self !== window.top;
  } catch (e) {
    console.warn('inIframe', e);
    return true;
  }
};