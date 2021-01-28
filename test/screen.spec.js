import { expect, } from "chai";
var MockBrowser = require("mock-browser").mocks.MockBrowser;


import screen from "../src/screen";

describe("Screen", () => {
  it("Touch active", () => {
    const window = global.window;
    const Modernizr = global.Modernizr;

    const mockBrowser = new MockBrowser();

    global.window = mockBrowser.getWindow();

    global.window.screen.availHeight = 100
    global.window.screen.availWidth = 100
    global.window.screen.colorDepth = 64

    global.Modernizr = {
      touchevents: true,
    }

    let touch = screen.screenSupportTouch();
    expect(screen.screenHeight()).to.equal(100);
    expect(screen.screenWidth()).to.equal(100);
    expect(screen.screenColorDepth()).to.equal(64);

    expect(touch).to.equal(true);

    global.window = window;

    global.Modernizr = Modernizr
  });

  it("Touch inactive", () => {
    const window = global.window;
    const Modernizr = global.Modernizr;

    const mockBrowser = new MockBrowser();

    global.window = mockBrowser.getWindow();

    global.window.screen.availHeight = 100
    global.window.screen.availWidth = 100
    global.window.screen.colorDepth = 64

    global.Modernizr = {
      touchevents: false,
    }

    let touch = screen.screenSupportTouch();
    expect(screen.screenHeight()).to.equal(100);
    expect(screen.screenWidth()).to.equal(100);
    expect(screen.screenColorDepth()).to.equal(64);

    expect(touch).to.equal(false);

    global.window = window;

    global.Modernizr = Modernizr
  });

  it("No Modernizr", () => {
    const window = global.window;
    const Modernizr = global.Modernizr;

    const mockBrowser = new MockBrowser();

    global.window = mockBrowser.getWindow();

    global.window.screen.availHeight = 100
    global.window.screen.availWidth = 100
    global.window.screen.colorDepth = 64

    global.Modernizr = null;

    let touch = screen.screenSupportTouch();
    expect(screen.screenHeight()).to.equal(100);
    expect(screen.screenWidth()).to.equal(100);
    expect(screen.screenColorDepth()).to.equal(64);

    expect(touch).to.equal("Unknown");

    global.window = window;

    global.Modernizr = Modernizr
  });
});