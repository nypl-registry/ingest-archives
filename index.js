'use strict'

function IngestArchives () {
  /**
   * Ingest the Archives collections
   *
   * @param  {function} cb - Nothing returned
   */
  this.ingestCollections = require(`${__dirname}/lib/collections`)
}

module.exports = exports = new IngestArchives()
