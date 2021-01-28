import { expect, } from "chai";
var MockBrowser = require("mock-browser").mocks.MockBrowser;


import browser from "../src/browser";


describe("Browser", () => {
  it("Edge 42", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Edge");
    expect(br.version).to.equal("17.17134");
    expect(br.bitness).to.equal("64-bit");

    global.window = window;
  });

  it("Edge 88.0.705.50", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36 Edg/88.0.705.50",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Chromium Edge");
    expect(br.version).to.equal("88.0.705.50");
    expect(br.bitness).to.equal("64-bit");

    global.window = window;
  });

  it("Chrome  74.0.3729.169", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Google Chrome");
    expect(br.version).to.equal("74.0.3729.169");
    expect(br.bitness).to.equal("64-bit");

    global.window = window;
  });

  it("IE 11", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Internet Explorer");
    expect(br.version).to.equal("11.0");
    expect(br.bitness).to.equal("Unknown");

    global.window = window;
  });

  it("IE Mobile 11", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("IE Mobile");
    expect(br.version).to.equal("11.0");
    expect(br.bitness).to.equal("Unknown");

    global.window = window;
  });

  it("IE 6", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Internet Explorer");
    expect(br.version).to.equal("6.0");
    expect(br.bitness).to.equal("Unknown");

    global.window = window;
  });

  it("Opera 9.80", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Opera");
    expect(br.version).to.equal("12.18");
    expect(br.bitness).to.equal("32-bit");

    global.window = window;
  });

  it("Opera 73", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36 OPR/73.0.3856.344",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Opera");
    expect(br.version).to.equal("73.0.3856.344");
    expect(br.bitness).to.equal("64-bit");

    global.window = window;
  });

  it("Safari", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Safari/605.1.15",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Safari");
    expect(br.version).to.equal("14.0.2");
    expect(br.bitness).to.equal("Unknown");

    global.window = window;
  });

  it("Firefox", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Firefox");
    expect(br.version).to.equal("85.0");
    expect(br.bitness).to.equal("64-bit");

    global.window = window;
  });

  it("Samsung browser", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.2",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("SamsungBrowser");
    expect(br.version).to.equal("10.2");
    expect(br.bitness).to.equal("Unknown");

    global.window = window;
  });

  it("Unknown", () => {
    const window = global.window;

    const mockBrowser = new MockBrowser({
      window: {
        navigator: {
          userAgent: "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser",
        },
      },
    });

    global.window = mockBrowser.getWindow();

    global.window.navigator = mockBrowser.getNavigator();

    var br = browser.browser();

    expect(br.browser).to.equal("Unknown");
    expect(br.version).to.equal("Unknown");
    expect(br.bitness).to.equal("Unknown");

    global.window = window;
  });
});