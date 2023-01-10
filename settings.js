
"usse strict";

let settings;

module.exports = {
    getSetting: function (settingName) {
    settings = require('./testsettings.json')
    if(settings === undefined){
        settings = require('./testsettings.json')
    }
    return eval("settings." + settingName)
  }  
}