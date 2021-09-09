# is-uri

![Last version](https://img.shields.io/github/tag/Kikobeats/is-uri.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/is-uri/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/is-uri)
[![Dependency status](http://img.shields.io/david/Kikobeats/is-uri.svg?style=flat-square)](https://david-dm.org/Kikobeats/is-uri)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/is-uri.svg?style=flat-square)](https://david-dm.org/Kikobeats/is-uri#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/is-uri.svg?style=flat-square)](https://www.npmjs.org/package/is-uri)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Determinate if a string is a valid URI. Based in [uri](https://www.npmjs.com/package/validate.io-uri) but works out of the box and improved.

## Install

```bash
$ npm install is-uri --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
$ bower install is-uri --save
```

and later link in your HTML:

```html
<script src="bower_components/is-uri/dist/is-uri.js"></script>
```

## Usage

```js
var isUri = require('is-uri')
isUri('http://google.com') //=> true
```

## API

### isUri(str, [options])

`options` are passed to [parse-uri](https://github.com/Kikobeats/parse-uri#parse-uri) module.

### Related

* [parse-uri](https://github.com/Kikobeats/parse-uri#parse-uri) – Lightweight module for parse an URI.

## License

MIT © [Kiko Beats](http://kikobeats.com)
