const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir:'./reports/json',
    reportPath: './reports/html/index.html',
    metadata:{
        device: 'Local',
        platform:{
            name: 'Windows',
            version: '10'
        }
    },
    customData:{
        title: 'Run Information',
        data:[
            {label:'Project',value:'Test Project'},
            {label:'Release',value:'Test'},
            {label:'Execution Date',value:new Date().toUTCString()}
        ]
    }
})