'use strict'

var parseURI = require('parse-uri')
var encode = require('punycode2/encode')

// Illegal characters (anything which is not in between the square brackets):
var ILLEGALS = /[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i

// Incomplete HEX escapes:
var HEX1 = /%[^0-9a-f]/i
var HEX2 = /%[0-9a-f](:?[^0-9a-f]|$)/i

// Scheme must begin with a letter, then consist of letters, digits, '+', '.', or '-' => e.g., 'http', 'https', 'ftp'
var PROTOCOL = /^[a-z][a-z0-9\+\-\.]*$/

// If authority is not present, path must not begin with '//'
var PATH = /^\/\//

module.exports = function isURI (uri, opts) {
  if (!uri) return false

  if (typeof uri !== 'object') {
    uri = encode(uri)
    if (ILLEGALS.test(uri)) return false
    if (HEX1.test(uri) || HEX2.test(uri)) return false
    uri = parseURI(uri, opts)
  }

  if (!uri.protocol || !PROTOCOL.test(uri.protocol.toLowerCase())) return false
  if (!uri.authority && PATH.test(uri.path)) return false

  return true
}
