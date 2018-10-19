export function pixelRatio() {
  return window.devicePixelRatio;
}

export function pixelWidth() {
  let devicePixelRatio = pixelRatio();
  if(devicePixelRatio !== undefined) {
    return Math.round(window.screen.availWidth * devicePixelRatio);
  }
  return window.screen.availWidth;
}

export function pixelHeight() {
  let devicePixelRatio = pixelRatio();
  if(devicePixelRatio !== undefined) {
    return Math.round(window.screen.availHeight * devicePixelRatio);
  }
  return window.screen.availHeight;
}

export default { 
  pixelHeight,
  pixelRatio,
  pixelWidth,
};