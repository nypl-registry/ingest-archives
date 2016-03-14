# ingest-archives
[![travis](https://travis-ci.org/nypl-registry/ingest-archives.svg)](https://travis-ci.org/nypl-registry/ingest-archives/)

From archives EAD JSON to native JSON

This module converts the CSV tables exported from archives portal into native registry JSON. The test suite covers the EAD-JSON->JSON transformation. These jobs could be ran manually but are called from the [Archives Ingest dispatch job](https://github.com/nypl-registry/dispatch/blob/master/jobs/ingest_archives.js)
