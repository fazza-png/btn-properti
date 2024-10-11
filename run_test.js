const fs = require('fs')
const path = require('path')
const Mocha = require('mocha')

function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const reportDir = `reports/${formatDate(new Date())}/mochawesome-report`
const reportFilename = 'report' 

const reportsDir = path.join(__dirname, reportDir)
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true })
}

const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: reportsDir,      
    reportFilename: reportFilename,
    overwrite: true,            
    html: true,
    json: true
  }
})

mocha.addFile('./test/homeTest/homeTest.js')

mocha.run(function (failures) {
  if (failures) {
    console.log(`${failures} test failed`)
  } else {
    console.log('All tests successful')
  }
  process.exitCode = failures ? 1 : 0
})
