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
    expect(os.operatingSystem).to.equal("Mac OS X");

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
    expect(os.operatingSystem).to.equal("Mac OS X");

    global.window = window;
  });

  it("Windows 10", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("10");
    expect(os.operatingSystem).to.equal("Windows");

    global.window = window;
  });

  it("IPhone 12.2.0", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("12.2.0");
    expect(os.operatingSystem).to.equal("iOS");

    global.window = window;
  });

  it("IPhone 12.1.4", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16D57",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("12.1.4");
    expect(os.operatingSystem).to.equal("iOS");

    global.window = window;
  });

  it("Android 12 Chrome", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.78 Mobile Safari/537.36",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("12");
    expect(os.operatingSystem).to.equal("Android");

    global.window = window;
  });

  it("Android 12 Firefox", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Android 12; Mobile; rv:68.0) Gecko/68.0 Firefox/101.0",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("12");
    expect(os.operatingSystem).to.equal("Android");

    global.window = window;
  });

  it("Android 11 Chrome", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Linux; Android 11; Samsung SM-A025G) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("11");
    expect(os.operatingSystem).to.equal("Android");

    global.window = window;
  });

  it("Android 7 Chrome", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Linux; Android 7.0; SM-G930VC Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("7.0");
    expect(os.operatingSystem).to.equal("Android");

    global.window = window;
  });

  it("Windows Phone 8.1", () => {
    const window = global.window;

    const browser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537",
        },
      },
    });

    global.window = browser.getWindow();

    global.window.navigator = browser.getNavigator();

    var os = operatingsystem.operatingSystem();

    expect(os.version).to.equal("8.1");
    expect(os.operatingSystem).to.equal("Windows Phone");

    global.window = window;
  });
});