function detectIEMobileVersion(userAgent, versionOffset) {
  let browser = "IE Mobile";
  let version = userAgent.substring(versionOffset + 9);
  let endIndex = version.indexOf(";");
  if (endIndex != -1) {
    version = version.substring(0, endIndex);
  }

  browserInfo = { 
    browser, 
    version,
  };
}

function detectOperaVersion(userAgent, versionOffset) {
  let browser = "Opera";
  let version = userAgent.substring(versionOffset + 6);
  if ((versionOffset = userAgent.indexOf("Version")) != -1) {
    version = userAgent.substring(versionOffset + 8);
  }
  browserInfo = { 
    browser, 
    version,
  };
}

function detectSafariVersion(userAgent, versionOffset) {
  let browser = "Safari";
  let version = userAgent.substring(versionOffset + 7);
  if ((versionOffset = userAgent.indexOf("Version")) != -1) {
    version = userAgent.substring(versionOffset + 8);
  }
  browserInfo = { 
    browser, 
    version,
  };
}

function detectOtherBrowserVersion(userAgent, versionOffset, nameOffset) {
  let browser = userAgent.substring(nameOffset, versionOffset);
  let version = userAgent.substring(versionOffset + 1);
  if (browser.toLowerCase() === browser.toUpperCase()) {
    browser = window.navigator.appName;
  }

  browserInfo = { 
    browser, 
    version,
  };
}

function detectBrowserBitness() {
  if (window.navigator.platform) {
    let platform = window.navigator.platform.toLowerCase();
    if (platform === "win32") {
      return "32-bit";
    }
    else if (platform === "win64") {
      return "64-bit";
    }
  }

  if (window.navigator.userAgent) {
    let userAgent = window.navigator.userAgent.toLowerCase();
    if ((userAgent.indexOf("wow64") > -1)) {
      return "32-bit";
    } else if ((userAgent.indexOf("win64") > -1)) {
      return "64-bit";
    }
  }

  if (window.navigator.oscpu) {
    let oscpu = window.navigator.oscpu;

    let osinfo = oscpu.split(";");

    if (osinfo.length === 3) {
      let cpuBitness = osinfo[2].toLowerCase();
      if (cpuBitness === "x64") {
        return "64-bit";
      }
      else if (cpuBitness === "x86") {
        return "32-bit"
      }
    }
  }

  return "Unknown";
}

export function browser() {
  if (window.navigator) {
    let userAgent = window.navigator.userAgent;

    let nameOffset, versionOffset, browserInfo;

    //IEMobile
    if ((versionOffset = userAgent.indexOf("IEMobile/")) != -1) {
      browserInfo = detectIEMobileVersion(userAgent, versionOffset);
    }
    // Opera
    else if ((versionOffset = userAgent.indexOf("Opera")) != -1) {
      browserInfo = detectOperaVersion(userAgent, versionOffset);
    }
    // Opera as OPR
    else if ((versionOffset = userAgent.indexOf("OPR")) != -1) {
      let browser = "Opera";
      let version = userAgent.substring(versionOffset + 4);

      browserInfo = { 
        browser, 
        version,
      };
    }
    // MSIE
    else if ((versionOffset = userAgent.indexOf("MSIE")) != -1) {
      let browser = "Internet Explorer";
      let version = userAgent.substring(versionOffset + 5);

      browserInfo = { 
        browser, 
        version,
      };
    }
    // Edge (Windows 10)
    else if ((versionOffset = userAgent.indexOf("Edge")) != -1) {
      let browser = "Edge";
      let version = userAgent.substring(versionOffset + 5);

      browserInfo = { 
        browser, 
        version,
      };
    }
    // Chrome
    else if ((versionOffset = userAgent.indexOf("Chrome")) != -1) {
      let browser = "Google Chrome";
      let version = userAgent.substring(versionOffset + 7);

      browserInfo = { 
        browser, 
        version,
      };
    }
    // Safari
    else if ((versionOffset = userAgent.indexOf("Safari")) != -1) {
      browserInfo = detectSafariVersion(userAgent, versionOffset);
    }
    // Firefox
    else if ((versionOffset = userAgent.indexOf("Firefox")) != -1) {
      let browser = "Firefox";
      let version = userAgent.substring(versionOffset + 8);

      browserInfo = { 
        browser, 
        version,
      };
    }
    // MSIE 11+
    else if (userAgent.indexOf("Trident/") != -1) {
      let browser = "Internet Explorer";
      let version = userAgent.substring(userAgent.indexOf("rv:") + 3);

      browserInfo = { 
        browser, 
        version,
      };
    }
    // Other browsers
    else if ((nameOffset = userAgent.lastIndexOf(" ") + 1) < (versionOffset = userAgent.lastIndexOf("/"))) {
      browserInfo = detectOtherBrowserVersion(userAgent, versionOffset, nameOffset)
    }
    else {
      browserInfo = { 
        browser: "Unknown", 
        version: "Unknown", 
      };
    }

    let index, version = browserInfo.version;
    // trim the version string
    if ((index = version.indexOf(";")) != -1) {
      version = version.substring(0, index)
    };
    if ((index = version.indexOf(" ")) != -1) {
      version = version.substring(0, index)
    };
    if ((index = version.indexOf(")")) != -1) {
      version = version.substring(0, index)
    };

    return { 
      browser: browserInfo.browser,
      version, bitness: detectBrowserBitness(),
    }
  }
}

export default { 
  browser, 
  browserBitness: detectBrowserBitness,
}