const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'reports/json',
    reportPath: 'reports/html',
    metadata:{
        browser: {
            name: 'chrome',
            version: '108'
        },
        device: 'Local test machine',
        platform: {
            name: 'mac',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Test Project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'}
        ]
    }
});