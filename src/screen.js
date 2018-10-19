export function screenColorDepth() {
  return window.screen.colorDepth;
}

export function screenHeight() {
  return window.screen.availHeight;
}

export function screenSupportTouch() {
  if (typeof Modernizr == "object") {
    if (Modernizr) {
      return Modernizr.touchevents;
    }
  }

  return "Unknown";
}

export function screenWidth() {
  return window.screen.availWidth;
}

export default { 
  screenColorDepth, 
  screenHeight, 
  screenSupportTouch, 
  screenWidth, 
}