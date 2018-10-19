import browser from "./browser"
import device from "./device"
import operatingSystem from "./operatingsystem"
import screen from "./screen"
import windowInfo from "./window"

export default function browserInfo() {
  return {
    browser: browser.browser(),
    device: {
      height: device.pixelHeight(),
      pixelRatio: device.pixelRatio(),
      width: device.pixelWidth(),
    },
    operatingSystem: operatingSystem.operatingSystem(),
    screen: {
      colorDepth: screen.screenColorDepth(),
      height: screen.screenHeight(),
      touchEvents: screen.screenSupportTouch(),
      width: screen.screenWidth(),
    },
    window: {
      height: windowInfo.windowHeight(),
      screenX: windowInfo.windowScreenX(),
      width: windowInfo.windowWidth(),
    },
  };
}