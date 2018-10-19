let fs = require("fs"),
  path = require("path");
const { exec, } = require("child_process");

const TEST_RESULTS_DIRECTORY = "./.test-output";
const CODE_COVERAGE_DIRECTORY = "./.test-output/coverage";

fs.readdir(CODE_COVERAGE_DIRECTORY, (err, files)=> {
  if(err) { throw new Error(err); }

  let reports = files.filter((report)=> {
    return report.endsWith(".html");
  });

  reports.forEach((report)=> {
    var reportPath = path.join(CODE_COVERAGE_DIRECTORY, report);

    exec("juice " + reportPath + " " + reportPath);
  });
});