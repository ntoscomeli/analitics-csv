import csv from 'csv-parser'
import converter from 'json-2-csv'
import fs from 'fs'

import buildInfo from './utils/index'

const DEFAULT = 'example'

const doScript = async () => {
  console.log('----- STARTING -----')
  const csvFilename = process.argv.slice(2) || DEFAULT
  
  console.log(`FILE: ${csvFilename} CSV`)
  const results = []

  fs.createReadStream(`${csvFilename}.csv`)
    .pipe(csv(
      {
        skipLines: 1,
        skipComments: true,
      }
    ))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      buildInfo(results).then((info) => {
        converter.json2csv(info, (err, csv) => {
          if (err) {
            throw err
          }
          fs.writeFileSync('todos.csv', csv)
        })
      })
    })
}

export default doScript

doScript()
