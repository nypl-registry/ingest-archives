'use strict'

// given an archives response description record pull out the required identifiers
exports.extractIds = function (record) {
  var idents = {}

  if (record.title) idents.title = record.title

  if (record.date_statement) idents.dateStatement = record.date_statement

  if (record.id) idents.mssDb = record.id

  if (record.identifier_type) {
    if (record.identifier_type === 'local_mss') {
      if (record.identifier_value) {
        idents.mss = parseInt(record.identifier_value)
      }
    }
  }

  if (record.bnumber) idents.bNumber = record.bnumber

  if (record.call_number) idents.callNumber = record.call_number

  if (record.org_unit_code) idents.divisions = record.org_unit_code

  if (record.collection_id) idents.collectionDb = record.collection_id

  if (record.parent_id) idents.parentDb = record.parent_id

  if (record.type) idents.type = record.type

  if (record.level_text) idents.levelText = record.level_text

  if (record.resource_type) idents.resourceType = record.resource_type

  if (record.sib_seq) idents.orderSequence = record.sib_seq

  if (record.level_num) idents.orderLevel = record.level_num

  for (var x in record.unitid) {
    var unitid = record.unitid[x]

    if (unitid) {
      if (unitid.type) {
        if (unitid.type === 'local_barcode') {
          if (unitid.value) {
            idents.barcode = parseInt(unitid.value)
          }
        }
      }
    }
  }

  return idents
}

exports.extractAgents = function (record) {
  var agents = []

  var idsAdded = []

  if (record.origination) {
    for (var x in record.origination) {
      x = record.origination[x]

      var valueURI = false

      // check if they have a uri
      if (x.value_uri) valueURI = x.value_uri

      if (x.term && x.term.search(' -- ') > -1) x.term = x.term.split(' -- ')[0]

      if (idsAdded.indexOf(x.id) === -1) {
        agents.push(
          {
            id: (x.id) ? x.id : false,
            namePart: (x.term) ? x.term : false,
            type: (x.type) ? x.type : false,
            authority: (x.source) ? x.source : false,
            role: (x.role) ? x.role : 'originator',
            valueURI: valueURI
          }
        )
        idsAdded.push(x.id)
      }
    }
  }

  // now pull out the control terms
  if (record.controlaccess) {
    if (record.controlaccess.name) {
      for (var y in record.controlaccess.name) {
        var name = record.controlaccess.name[y]

        var valueURITerm = false

        // check if they have a uri
        if (name.value_uri) valueURI = name.value_uri

        if (name.term && name.term.search(' -- ') > -1) name.term = name.term.split(' -- ')[0]
        if (idsAdded.indexOf(name.id) === -1) {
          agents.push(
            {
              id: (name.id) ? name.id : false,
              namePart: (name.term) ? name.term : false,
              type: (name.type) ? name.type : false,
              authority: (name.source) ? name.source : false,
              role: 'contributor', // TODO SPLIT on ' -- ' and add in role term
              valueURI: valueURITerm
            }
          )

          idsAdded.push(name.id)
        }
      }
    }
  }
  return agents
}

exports.extractSubjects = function (record) {
  var subjects = []

  if (record.controlaccess) {
    for (var controlType in record.controlaccess) {
      if (controlType === 'subject' || controlType === 'occupation' || controlType === 'genreform' || controlType === 'geogname') {
        for (var x in record.controlaccess[controlType]) {
          var r = record.controlaccess[controlType][x]

          subjects.push({
            id: (r.id) ? r.id : false,
            type: (r.type) ? r.type : false,
            nameType: controlType,
            authority: (r.source) ? r.source : false,
            valueURI: false,
            text: (r.term) ? r.term : false

          })
        }
      }
    }
  }

  return subjects
}

exports.extractNotes = function (record) {
  var notes = []

  var noteFields = ['bioghist', 'custodhist', 'scopecontent', 'acqinfo', 'relatedmaterial', 'langmaterial']

  for (var note in noteFields) {
    note = noteFields[note]

    if (record[note]) {
      record[note].map(function (obj) {
        if (obj.value) {
          notes.push({type: note, text: obj.value})
        }
      })
    }
  }

  for (var x in record.note) {
    x = record.note[x]
    notes.push({
      type: (x.type) ? x.type : false,
      text: (x.value) ? x.value : false
    })
  }

  return notes
}

exports.extractLanguage = function (record) {
  var languages = []

  if (record.langmaterial_code) {
    record.langmaterial_code.map(function (val) {
      languages.push(val)
    })
  }

  return languages
}

exports.extractDates = function (record) {
  var dates = []

  if (record.date_inclusive_start) {
    dates.push({
      field: 'inclusive',
      type: false,
      value: record.date_inclusive_start,
      keyDate: false,
      point: 'start',
      encoding: false

    })
  }

  if (record.date_inclusive_end) {
    dates.push({
      field: 'inclusive',
      type: false,
      value: record.date_inclusive_end,
      keyDate: false,
      point: 'end',
      encoding: false

    })
  }

  if (record.keydate) {
    dates.push({
      field: 'exact',
      type: false,
      value: record.keydate,
      keyDate: true,
      point: false,
      encoding: false

    })
  }

  return dates
}

exports.extractAbstracts = function (record) {
  var abstracts = []

  if (record.abstract) {
    for (var x in record.abstract) {
      if (record.abstract[x].value) {
        abstracts.push(record.abstract[x].value)
      }
    }
  }

  return abstracts
}
