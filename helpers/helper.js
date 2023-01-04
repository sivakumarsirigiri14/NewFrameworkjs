const {By} = require("selenium-webdriver");
const assert = require("assert")
const fs = require("fs")
const path = require("path");

let fileFound;


module.exports = {

    getTestDataFile: function (testFile) {
        return require(findFileWithPath(getTestDataFolder(), testFile));
    }
}

function getTestDataFolder() {
    let dirName = __dirname.split("/");
    let fullPath=dirName.splice(0, (dirName.length - 1)).join("\\") + "\\test_data\\";
    return fullPath;
}

function findFileWithPath(startPath, fileName) {
    fileFound = "";
    startPath = startPath.replaceAll("\\","//");

    if (!fs.existsSync(startPath)) {
        assert.fail("No Dir existing with the path" +startPath);
    }

    let files = fs.readdirSync(startPath);

    for (let i = 0; i < files.length; i++) {
        if (fileFound !== "") break;
        let filePath = path.join(startPath, files[i]);
        let stat = fs.lstatSync(filePath);
        if (stat.isDirectory()) {
            findFileWithPath(filePath, fileName);
        } else if (files[i] === fileName) {
            fileFound = filePath;
            break;
        }
    }
    return fileFound;
}