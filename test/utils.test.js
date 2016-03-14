'use strict'
var assert = require('assert')
var should = require('should')
var archivesUtils = require('../lib/utils.js')

var collectionJson = {
  'abstract': [
    {
      'value': 'Alexander Hamilton (1754-1804) was a Founding Father, soldier, lawyer and statesman. He served as the first United States Secretary of the Treasury from 1789 to 1795. The Alexander Hamilton papers, dated 1775-1804, primarily consist of letters and documents either written or signed by Alexander Hamilton, and pertain to his career as a soldier, lawyer, statesman and United States Secretary of the Treasury. Autograph letters, drafts and copies of letters sent by Hamilton concern his Revolutionary War service, chiefly as an aide-de-camp to General George Washington; his legal practice in New York; and financial and political matters. Notable items include Hamilton’s letters to President Washington, dated 1796, concerning the writing of Washington’s Farewell Address to the nation, with a draft of the Address written by Hamilton for Washington’s consideration. Documents include his 1782 appointment as Receiver of Continental Taxes in New York, legal documents relating to his law practice and personal estate, and legal notes and other items in his hand. Treasury Department letters are chiefly manuscript or printed circular letters which are not in Hamilton’s handwriting but bear his autograph signature.'
    }
  ],
  'acqinfo': [
    {
      'value': '<p>Various gifts and purchases, 1896-1948</p>'
    }
  ],
  'active': true,
  'bioghist': [
    {
      'value': '<p>Alexander Hamilton (1754-1804) was a Founding Father, soldier, lawyer and statesman. He served as the first United States Secretary of the Treasury from 1789 to 1795. Born in the West Indies, Hamilton came to the American colonies to attend school, graduating from King’s College (Columbia University) in 1774. He fought as an American military officer during the Revolutionary War and was General George Washington’s aide-de-camp prior to his resignation from the Army in 1782. In that same year he established his law practice in New York City and was appointed Receiver of Continental Taxes for the State of New York. Hamilton represented the State at the Constitutional Convention of 1787, and played a key role in supporting the adoption of the United States Constitution as co-author of The Federalist Papers with John Jay and James Madison. Hamilton was also instrumental in shaping the country’s financial system. In 1789, President Washington appointed Hamilton as the first United States Secretary of the Treasury. He resigned in 1795, returning to his law practice in New York. In 1780 he married Elizabeth Schuyler (1757-1854), daughter of General Philip Schuyler. Hamilton was mortally wounded in a duel with Aaron Burr on July 11, 1804.</p>'
    }
  ],
  'bnumber': 'b12361313',
  'call_number': 'MssCol 1297',
  'component_layout_id': 2,
  'controlaccess': {
    'genreform': [
      {
        'controlaccess': true,
        'id': 4318,
        'questionable': false,
        'source': 'aat',
        'term': 'Legal documents',
        'type': 'genreform',
        'value_uri': 'http://vocab.getty.edu/aat/300027590'
      }
    ],
    'geogname': [
      {
        'controlaccess': true,
        'id': 157810,
        'questionable': false,
        'source': 'naf',
        'term': 'United States -- History -- Revolution, 1775-1783',
        'type': 'geogname'
      },
      {
        'controlaccess': true,
        'id': 164908,
        'questionable': false,
        'source': 'naf',
        'term': 'United States -- Politics and government -- 1789-1815',
        'type': 'geogname'
      }
    ],
    'name': [
      {
        'controlaccess': true,
        'id': 375,
        'questionable': false,
        'role': 'subject',
        'source': 'naf',
        'term': 'Hamilton, Alexander, 1757-1804',
        'type': 'persname',
        'value_uri': 'http://id.loc.gov/authorities/names/n79021633'
      },
      {
        'controlaccess': true,
        'id': 164903,
        'questionable': false,
        'source': 'naf',
        'term': 'Hamilton, Elizabeth Schuyler, 1757-1854',
        'type': 'persname',
        'value_uri': 'http://viaf.org/viaf/26348195'
      },
      {
        'controlaccess': true,
        'id': 157809,
        'questionable': false,
        'source': 'naf',
        'term': 'Huntington, Jedediah, 1743-1818 -- recipient',
        'type': 'persname'
      },
      {
        'controlaccess': true,
        'id': 164904,
        'questionable': false,
        'source': 'naf',
        'term': 'Jay, John, 1745-1829 -- recipient',
        'type': 'persname'
      },
      {
        'controlaccess': true,
        'id': 164902,
        'questionable': false,
        'role': 'subject',
        'source': 'naf',
        'term': 'Washington, George, 1732-1799 -- Farewell address',
        'type': 'persname'
      },
      {
        'controlaccess': true,
        'id': 164906,
        'questionable': false,
        'source': 'naf',
        'term': 'Washington, George, 1732-1799 -- recipient',
        'type': 'persname'
      },
      {
        'controlaccess': true,
        'id': 164901,
        'questionable': false,
        'role': 'subject',
        'source': 'naf',
        'term': 'United States. Department of the Treasury. Office of the Secretary',
        'type': 'corpname',
        'value_uri': 'http://viaf.org/viaf/123695270'
      }
    ],
    'occupation': [
      {
        'controlaccess': true,
        'function': 'occupation',
        'id': 20255,
        'questionable': false,
        'source': 'lcsh',
        'term': 'Lawyers',
        'type': 'topic'
      },
      {
        'controlaccess': true,
        'function': 'occupation',
        'id': 147303,
        'questionable': false,
        'source': 'lcsh',
        'term': 'Soldiers',
        'type': 'topic'
      },
      {
        'controlaccess': true,
        'function': 'occupation',
        'id': 32967,
        'questionable': false,
        'source': 'lcsh',
        'term': 'Statesmen',
        'type': 'topic'
      }
    ],
    'subject': [
      {
        'controlaccess': true,
        'id': 164907,
        'questionable': false,
        'source': 'lcsh',
        'term': 'Customs administration -- United States',
        'type': 'topic'
      },
      {
        'controlaccess': true,
        'id': 161736,
        'questionable': false,
        'source': 'lcsh',
        'term': 'Finance, public -- United States',
        'type': 'topic'
      }
    ]
  },
  'created_at': '2013-04-01T14:58:51Z',
  'custodhist': [
    {
      'value': "<p>The bulk of the Alexander Hamilton papers are comprised of documents transferred from the Ford collection and the Thomas Addis Emmet collection. The Ford Collection was compiled by Gordon L. Ford, business manager of the New York Tribune from 1873 to 1881 and collector of documents pertaining to early American history. Ford's collection was later purchased by J. Pierpont Morgan and portions of it were donated to The New York Public Library in 1899. The Emmet Collection was collected by Dr. Thomas Addis Emmet, a collector of early American history manuscripts. His collection was later purchased by John S. Kennedy and donated to The New York Public Library in 1896. Various other gifts and purchases are also included.</p>"
    }
  ],
  'date_end': '1804',
  'date_inclusive_end': 1804,
  'date_inclusive_start': 1775,
  'date_processed': 2015,
  'date_start': '1775',
  'date_statement': '1775-1804',
  'dates_index': [
    1775,
    1776,
    1777,
    1778,
    1779,
    1780,
    1781,
    1782,
    1783,
    1784,
    1785,
    1786,
    1787,
    1788,
    1789,
    1790,
    1791,
    1792,
    1793,
    1794,
    1795,
    1796,
    1797,
    1798,
    1799,
    1800,
    1801,
    1802,
    1803,
    1804
  ],
  'digital_assets': true,
  'dsc_type': [
    'combined'
  ],
  'extent_statement': '.25 linear feet (1 box)',
  'featured_seq': 4,
  'fully_digitized': 1,
  'has_digital': 1,
  'id': 206,
  'identifier_type': 'local_mss',
  'identifier_value': '1297',
  'keydate': '1775',
  'linear_feet': 0.25,
  'max_depth': 3,
  'note': [
    {
      'type': 'sponsor',
      'value': 'Digitization was made possible by a lead gift from The Polonsky Foundation.'
    }
  ],
  'org_unit_code': 'MSS',
  'org_unit_id': 1,
  'org_unit_name': 'Manuscripts and Archives Division',
  'org_unit_name_short': 'Manuscripts and Archives Division',
  'origination': [
    {
      'controlaccess': false,
      'function': 'origination',
      'id': 375,
      'questionable': false,
      'role': 'creator',
      'source': 'naf',
      'term': 'Hamilton, Alexander, 1757-1804',
      'type': 'persname',
      'value': 'Hamilton, Alexander, 1757-1804',
      'value_uri': 'http://id.loc.gov/authorities/names/n79021633'
    }
  ],
  'origination_term': [
    {
      'controlaccess': false,
      'function': 'origination',
      'id': 375,
      'questionable': false,
      'role': 'creator',
      'source': 'naf',
      'term': 'Hamilton, Alexander, 1757-1804',
      'type': 'persname',
      'value_uri': 'http://id.loc.gov/authorities/names/n79021633'
    }
  ],
  'physdesc': [
    {
      'format': 'structured',
      'physdesc_components': [
        {
          'name': 'extent',
          'unit': 'linear feet',
          'value': '.25 linear feet'
        },
        {
          'name': 'extent',
          'unit': 'containers',
          'value': '1 box'
        }
      ],
      'supress_display': true
    }
  ],
  'prefercite': [
    {
      'value': '<p>Alexander Hamilton papers, Manuscripts and Archives Division, The New York Public Library</p>'
    }
  ],
  'processinfo': [
    {
      'type': 'processing',
      'value': '<p>Compiled by <span class="name">Casey Babcock</span>, <span class="date">2015</span></p>'
    }
  ],
  'repository': [
    {
      'id': 'MSS',
      'value': 'Manuscripts and Archives Division'
    }
  ],
  'scopecontent': [
    {
      'value': '<p>The Alexander Hamilton papers, dated 1775-1804, primarily consist of letters and documents either written or signed by Alexander Hamilton, and pertain to his career as a soldier, lawyer, statesman and United States Secretary of the Treasury. It is a synthetic collection of largely autograph material, combining gifts and purchases from various sources.</p> <p>Autograph letters, drafts and copies of letters sent by Hamilton concern his Revolutionary War service, chiefly as an aide-de-camp to General George Washington; his law practice in New York; and financial and political matters. Notable items include Hamilton’s letters to President Washington, dated 1796, concerning the writing of Washington’s Farewell Address to the nation. His letter of 1796 August 10 encloses a draft of the Address, written by Hamilton for Washington’s consideration. One personal letter to his wife Elizabeth Hamilton dated 1803 gives instructions for property improvements at their home, The Grange. Documents include his 1782 appointment as Receiver of Continental Taxes in New York, legal documents relating to his law practice and personal estate, and legal notes and other items in his hand.</p> <p>Treasury Department letters are chiefly manuscript or printed circular letters which are not in Hamilton’s handwriting but bear his autograph signature. Most are addressed to Collectors of Customs and concern customs and shipping regulations, the apportionment or collection of federal monies, and banking matters. Many are addressed to Jedediah Huntington, Collector of Customs at New London, Connecticut. Also included are a few signed receipts for drafts from Customs officers, a signed decision on a Customs case, and a clipped signature.</p>'
    }
  ],
  'series_count': 0,
  'show_generated_pdf': false,
  'sponsor': [
    {
      'value': 'Digitization was made possible by a lead gift from The Polonsky Foundation.'
    }
  ],
  'standard_access_note': 'Advance notice required.',
  'title': 'Alexander Hamilton papers',
  'total_children': 3,
  'total_components': 44,
  'type': 'Collection',
  'unitdate': [
    {
      'normal': '1775/1804',
      'type': 'inclusive',
      'value': '1775-1804'
    }
  ],
  'unitid': [
    {
      'type': 'local_mss',
      'value': '1297'
    },
    {
      'type': 'local_b',
      'value': 'b12361313'
    },
    {
      'type': 'local_barcode',
      'value': '33433087858829'
    },
    {
      'type': 'local_call',
      'value': 'MssCol 1297'
    }
  ],
  'langmaterial_code': ['ger'],
  'unittitle': [
    {
      'value': 'Alexander Hamilton papers'
    }
  ],
  'updated_at': '2016-02-12T19:44:26Z'
}

describe('archivesUtils', function () {
  it('should parse a archive record into identfiers used to match', function () {
    var r = archivesUtils.extractIds(collectionJson)

    r.title.should.equal('Alexander Hamilton papers')
    r.mssDb.should.equal(206)
    r.mss.should.equal(1297)
    r.bNumber.should.equal('b12361313')
    r.callNumber.should.equal('MssCol 1297')
    r.barcode.should.equal(33433087858829)
  })

  it('should parse a archive record into agents', function () {
    var r = archivesUtils.extractAgents(collectionJson)
    r[0].id.should.equal(375)
    r[0].namePart.should.equal('Hamilton, Alexander, 1757-1804')
    r[0].type.should.equal('persname')
    r[0].authority.should.equal('naf')
    r[0].role.should.equal('creator')
    r[0].valueURI.should.equal('http://id.loc.gov/authorities/names/n79021633')

    r[2].id.should.equal(157809)
    r[2].namePart.should.equal('Huntington, Jedediah, 1743-1818')
    r[2].type.should.equal('persname')
    r[2].authority.should.equal('naf')
    r[2].role.should.equal('contributor')
    r[2].valueURI.should.equal(false)
  })

  it('should parse a archive record subjects', function () {
    var r = archivesUtils.extractSubjects(collectionJson)

    r[0].id.should.equal(4318)
    r[0].text.should.equal('Legal documents')
    r[0].type.should.equal('genreform')
    r[0].nameType.should.equal('genreform')
    r[0].authority.should.equal('aat')
    r[0].valueURI.should.equal(false)
  })

  it('should parse a archive record notes', function () {
    var r = archivesUtils.extractNotes(collectionJson)

    r[0].type.should.equal('bioghist')
    r[0].text.should.equal('<p>Alexander Hamilton (1754-1804) was a Founding Father, soldier, lawyer and statesman. He served as the first United States Secretary of the Treasury from 1789 to 1795. Born in the West Indies, Hamilton came to the American colonies to attend school, graduating from King’s College (Columbia University) in 1774. He fought as an American military officer during the Revolutionary War and was General George Washington’s aide-de-camp prior to his resignation from the Army in 1782. In that same year he established his law practice in New York City and was appointed Receiver of Continental Taxes for the State of New York. Hamilton represented the State at the Constitutional Convention of 1787, and played a key role in supporting the adoption of the United States Constitution as co-author of The Federalist Papers with John Jay and James Madison. Hamilton was also instrumental in shaping the country’s financial system. In 1789, President Washington appointed Hamilton as the first United States Secretary of the Treasury. He resigned in 1795, returning to his law practice in New York. In 1780 he married Elizabeth Schuyler (1757-1854), daughter of General Philip Schuyler. Hamilton was mortally wounded in a duel with Aaron Burr on July 11, 1804.</p>')
  })

  it('should parse a archive lang', function () {
    var r = archivesUtils.extractLanguage(collectionJson)
    r[0].should.equal('ger')
  })

  it('should parse a archive dates', function () {
    var r = archivesUtils.extractDates(collectionJson)
    r[0].point.should.equal('start')
    r[0].value.should.equal(1775)
  })

  it('should parse a archive abstract', function () {
    var r = archivesUtils.extractAbstracts(collectionJson)
    r[0].should.equal('Alexander Hamilton (1754-1804) was a Founding Father, soldier, lawyer and statesman. He served as the first United States Secretary of the Treasury from 1789 to 1795. The Alexander Hamilton papers, dated 1775-1804, primarily consist of letters and documents either written or signed by Alexander Hamilton, and pertain to his career as a soldier, lawyer, statesman and United States Secretary of the Treasury. Autograph letters, drafts and copies of letters sent by Hamilton concern his Revolutionary War service, chiefly as an aide-de-camp to General George Washington; his legal practice in New York; and financial and political matters. Notable items include Hamilton’s letters to President Washington, dated 1796, concerning the writing of Washington’s Farewell Address to the nation, with a draft of the Address written by Hamilton for Washington’s consideration. Documents include his 1782 appointment as Receiver of Continental Taxes in New York, legal documents relating to his law practice and personal estate, and legal notes and other items in his hand. Treasury Department letters are chiefly manuscript or printed circular letters which are not in Hamilton’s handwriting but bear his autograph signature.')
  })
})
