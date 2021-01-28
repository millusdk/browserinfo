export function operatingSystem() {
  var operatingSystemName = NaN;
  var userAgent = window.navigator.userAgent;
  var osNamesTokens = [{
    osName: "Windows 2000",
    osToken: /(Windows NT 5.0|Windows 2000)/,
  }, {
    osName: "Windows XP",
    osToken: /(Windows NT 5.1|Windows XP)/,
  }, {
    osName: "Windows Server 2003",
    osToken: /Windows NT 5.2/,
  }, {
    osName: "Windows Vista",
    osToken: /Windows NT 6.0/,
  }, {
    osName: "Windows 7",
    osToken: /(Windows 7|Windows NT 6.1)/,
  }, {
    osName: "Windows 8.1",
    osToken: /(Windows 8.1|Windows NT 6.3)/,
  }, {
    osName: "Windows 8",
    osToken: /(Windows 8|Windows NT 6.2)/,
  }, { // windows Phone must appear before Edge
    osName: "Windows Phone",
    osToken: /Windows Phone/,
  }, { // Windows 10 must appear before Windows NT
    osName: "Windows 10",
    osToken: /(Windows 10|Windows NT 10.0)/,
  }, { // Window ME must appear before Windows NT
    osName: "Windows ME",
    osToken: /Windows ME/,
  }, {
    osName: "Windows NT 4.0",
    osToken: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
  }, {
    osName: "Android",
    osToken: /Android/,
  }, {
    osName: "Open BSD",
    osToken: /OpenBSD/,
  }, {
    osName: "Sun OS",
    osToken: /SunOS/,
  }, {
    osName: "Linux",
    osToken: /(Linux|X11)/,
  }, {
    osName: "iOS",
    osToken: /(iPhone|iPad|iPod)/,
  }, {
    osName: "Mac OS X",
    osToken: /Mac OS X/,
  }, {
    osName: "Mac OS",
    osToken: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
  }, {
    osName: "QNX",
    osToken: /QNX/,
  }, {
    osName: "UNIX",
    osToken: /UNIX/,
  }, {
    osName: "BeOS",
    osToken: /BeOS/,
  }, {
    osName: "OS/2",
    osToken: /OS\/2/,
  }, {
    osName: "Search Bot",
    osToken: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
  },];

  for (var index in osNamesTokens) {
    var osKeyValuePair = osNamesTokens[index];
    if (osKeyValuePair.osToken.test(userAgent)) {
      operatingSystemName = osKeyValuePair.osName;
      break;
    }
  }

  var operatingSystemVersion = "";
  var navigatorVersion = window.navigator.appVersion;
  switch (operatingSystemName) {
  case "Windows Phone":
    operatingSystemVersion = userAgent.substring(userAgent.indexOf("Windows Phone") + 14);
    operatingSystemVersion = operatingSystemVersion.substring(0, operatingSystemVersion.indexOf(";"));
    break;

  case "Mac OS X":
    operatingSystemVersion = /Mac OS X (\d[\.\_\d]+)/.exec(userAgent)[1];
    break;

  case "Android":
    operatingSystemVersion = /Android ([\.\_\d]+)/.exec(userAgent)[1];
    break;

  case "iOS":
    operatingSystemVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigatorVersion);
    operatingSystemVersion = operatingSystemVersion[1] + "." + operatingSystemVersion[2] + "." + (operatingSystemVersion[3] | 0);
    break;
  }

  if(operatingSystemName && operatingSystemName.indexOf("Windows") !== -1 && operatingSystemName.indexOf("Phone") === -1){
    let lastSpace = operatingSystemName.lastIndexOf(" ");

    if(lastSpace !== -1)
    {
      operatingSystemVersion = operatingSystemName.substring(lastSpace + 1);
      operatingSystemName = operatingSystemName.substring(0, lastSpace);
    }
  }

  return {
    operatingSystem: operatingSystemName,
    version: operatingSystemVersion,
  };
}

export default {
  operatingSystem,
}