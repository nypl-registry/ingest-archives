'use strict'

function IngestArchives () {
  /**
   * Ingest the Archives collections
   *
   * @param  {function} cb - Nothing returned
   */
  this.ingestCollections = require(`${__dirname}/lib/collections`)
  /**
   * Ingest the Archives components
   *
   * @param  {function} cb - Nothing returned
   */
  this.ingestComponents = require(`${__dirname}/lib/components`)
}

module.exports = exports = new IngestArchives()
