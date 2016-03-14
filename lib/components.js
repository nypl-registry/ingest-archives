'use strict'

module.exports = function (cb) {
  var lexicon = require('nypl-registry-utils-lexicon')
  // var utils = require('nypl-registry-utils-normalize')
  var _ = require('highland')
  var fs = require('fs')
  var db = require('nypl-registry-utils-database')
  var archivesUtils = require('../lib/utils.js')
  var exec = require('child_process').exec
  var clc = require('cli-color')
  var parseCsv = require('csv-parse')

  // the bulk insert function, it gets a unordered bulk operation from the db
  var insert = function (collections, callback) {
    // ask for a new bulk operation
    db.newRegistryIngestBulkOp('archivesComponents', (bulk) => {
      // insert all the operations
      collections.forEach((a) => bulk.insert(a))
      bulk.execute(function (err, result) {
        if (err) {
          console.log(err)
        }
        callback()
      })
    })
  }

  var csv2Json = function (line, callback) {
    parseCsv(line, {escape: '\\'}, function (err, item) {
      if (err) {
        console.log(clc.bgRedBright('--------------------------'))
        console.log(line)
        console.log(clc.bgRedBright('CSV PARSE Error ' + err))
        console.log(clc.bgRedBright('--------------------------'))
      }

      callback(err, item[0])
    })
  }

  db.prepareRegistryIngestArchivesComponents(function () {
    var filename = `${process.cwd()}${lexicon.configs.dataSourceFiles.archivesComponents}`

    exec(`wc -l ${filename}`, function (error, results) {
      if (error) console.log(error)

      var totalLines = results.trim().split(' ')[0]
      var totalInserted = 0

      var previousPercent = -1
      // if that did not work just set it to zero
      if (isNaN(totalLines)) totalLines = 0
      totalLines = parseInt(totalLines)

      db.returnCollectionRegistry('archivesComponents', function (err, collection) {
        if (err) console.log(err)

        _(fs.createReadStream(filename))
          .split()
          .compact()
          .map(_.curry(csv2Json))
          .nfcall([])
          .series()
          .map((line) => {
            // There is more data in the extracts that we are not using:
            // var idDb = line[0]
            // var idCollectionDb = line[1]
            var descData = line[2]
            // var structure = line[3]
            // var createdAt = line[4]
            // var updatedAt = line[5]
            // var digitalObjects = line[6]

            try {
              var record = JSON.parse(descData)
            } catch (e) {
              // not json, likely the header line
              return ''
            }

            var insert = archivesUtils.extractIds(record)

            insert._id = insert.mssDb

            insert.agents = archivesUtils.extractAgents(record)
            insert.subjects = archivesUtils.extractSubjects(record)
            insert.notes = archivesUtils.extractNotes(record)
            insert.languages = archivesUtils.extractLanguage(record)
            insert.dates = archivesUtils.extractDates(record)
            insert.abstracts = archivesUtils.extractAbstracts(record)
            insert.type = 'Component'

            var percent = Math.floor(++totalInserted / totalLines * 100)

            if (percent > previousPercent) {
              previousPercent = percent
              process.stdout.cursorTo(0)
              process.stdout.write(clc.black.bgWhiteBright('Archives Components: ' + percent + '%'))
            }

            return insert
          })
          .compact()
          .batch(999)
          .map(_.curry(insert))
          .nfcall([])
          .series()
          .done(function () {
            console.log('Done')
            if (cb) {
              cb()
            } else {
              process.exit(0)
            }
          })
      })
    })
  })
}
