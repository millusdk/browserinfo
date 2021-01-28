import { expect, } from "chai";
var MockBrowser = require("mock-browser").mocks.MockBrowser;


import operatingsystem from "../src/operatingsystem";


describe("Operating system", () => {
  it("Mac OS X Big Sur", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("11_1_0");

    global.window = window;
  });

  it("Mac OS X Catalina", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("10_15_0");

    global.window = window;
  });
});