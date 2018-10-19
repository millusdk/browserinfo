import { expect, } from "chai";
var MockBrowser = require("mock-browser").mocks.MockBrowser;


import browserInfo from "../src/browserinfo";


describe("Browserinfo", () => {
  it("full", () => {
    const window = global.window;

    global.window = new MockBrowser().getWindow();

    global.window.devicePixelRatio = 2;
    global.window.screen.availWidth = 100
    global.window.screen.availHeight = 100

    var info = browserInfo();

    expect(info.device.height).to.equal(200);
    expect(info.device.pixelRatio).to.equal(2);
    expect(info.device.width).to.equal(200);
    
    global.window = window;
  });
});