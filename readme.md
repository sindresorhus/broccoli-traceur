# Deprecated

Deprecated as Traceur is unmaintained. Check out [`broccoli-babel-transpiler`](https://github.com/babel/broccoli-babel-transpiler) instead.

---

# [broccoli](https://github.com/joliss/broccoli)-traceur [![Build Status](https://travis-ci.org/sindresorhus/broccoli-traceur.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-traceur)

> [`Traceur`](https://github.com/google/traceur-compiler) is a JavaScript.next to JavaScript-of-today compiler

*Issues with the output should be reported on the `Traceur` [issue tracker](https://github.com/google/traceur-compiler/issues).*


## Install

```
$ npm install --save-dev broccoli-traceur
```


## Usage

```js
var traceur = require('broccoli-traceur');
tree = traceur(tree, options);
```


## API

### traceur(tree, [options])

#### options

See the `Traceur` [options](https://github.com/google/traceur-compiler/issues/584).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
