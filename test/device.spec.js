import { expect, } from "chai";
var MockBrowser = require("mock-browser").mocks.MockBrowser;


import device from "../src/device";


describe("Device", () => {
  it("pixelRatio", () => {
    const window = global.window;

    global.window = new MockBrowser().getWindow();

    global.window.devicePixelRatio = 1;

    expect(device.pixelRatio()).to.equal(1);

    global.window = window;
  });

  it("pixelWidthRatioAvailable", () => {
    const window = global.window;

    global.window = new MockBrowser().getWindow();

    global.window.devicePixelRatio = 2;
    global.window.screen.availWidth = 100

    expect(device.pixelWidth()).to.equal(200);

    global.window = window;
  })

  it("pixelWidthNoRatio", () => {
    const window = global.window;

    global.window = new MockBrowser().getWindow();

    global.window.screen.availWidth = 100

    expect(device.pixelWidth()).to.equal(100);

    global.window = window;
  })

  it("pixelHeightRatioAvailable", () => {
    const window = global.window;

    global.window = new MockBrowser().getWindow();

    global.window.devicePixelRatio = 2;
    global.window.screen.availHeight = 100

    expect(device.pixelHeight()).to.equal(200);

    global.window = window;
  })

  it("pixelHeightNoRatio", () => {
    const window = global.window;

    global.window = new MockBrowser().getWindow();

    global.window.screen.availHeight = 100

    expect(device.pixelHeight()).to.equal(100);

    global.window = window;
  })
});