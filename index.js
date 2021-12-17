import csv from 'csv-parser'
import fs from 'fs'

import buildInfo from './utils/index'

const DEFAULT = 'example'

const doScript = () => {
  console.log('----- STARTING -----')
  const csvFilename = process.argv.slice(2) || DEFAULT

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
      // console.log(results)
      buildInfo(results)
    })
}

export default doScript

doScript()
