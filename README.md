# rollup-plugin-phtml [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][pHTML]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[rollup-plugin-phtml] lets you use [pHTML] with [Rollup].

## Install

Add [rollup-plugin-phtml] to your project:

```bash
npm install rollup-plugin-phtml --save-dev
```

## Usage

Use [rollup-plugin-phtml] in your Rollup configuration:

```js
// rollup.config.js
import phtml from 'rollup-plugin-phtml';

export default {
  plugins: [
    phtml({
      /* Plugins */
      plugins: [], // Array | Plugin | Function

      /* Process Options */
      processOptions: {} // Object
    })
  ]
}
```

Then you can use HTML files:

```js
import pageHTML from './page.html';
```

## Options

### plugins

The `plugins` property determines which [pHTML plugins] are applied.

```js
phtml({
  plugins: require('@phtml/image-alt')
})
```

```js
phtml({
  plugins: [
    require('@phtml/image-alt'),
    require('@phtml/image-size')({ intrinsicsize: 'intrinsic' })
  ]
})
```

### processOptions

The `processOptions` property determines which [pHTML custom settings] are
applied.

```js
phtml({
  processOptions: {
    voidElements: ['path', 'source', 'use']
  }
})
```

### inject

The `inject` option allows HTML imports to be injected into the document. By
default, this features is disabled.

```js
phtml({
  inject: true
})
```

When `true`, HTML is injected into `<body>` if it is available.

```js
// Inject to `<body>`
import './page.html'
```

The HTML string is still available as the default export.

```js
// Inject to `<body>` and also available as `pageHTML`
import pageHTML from './page.html'
```

When a String, HTML is injected into the matching selector, if it is available.

```js
phtml({
  inject: 'html > head:first-child'
  // ↑ the selector is unnecessary verbose for demonstration purposes
})
```

```js
// Inject to `<head>`
import './page.html'
```


[cli-img]: https://img.shields.io/travis/phtmlorg/rollup-plugin-phtml.svg
[cli-url]: https://travis-ci.org/phtmlorg/rollup-plugin-phtml
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/rollup-plugin-phtml.svg
[npm-url]: https://www.npmjs.com/package/rollup-plugin-phtml

[rollup-plugin-phtml]: https://github.com/phtmlorg/rollup-plugin-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML custom settings]: https://phtml.io/global.html#ProcessOptions
[pHTML plugins]: https://www.npmjs.com/search?q=keywords:phtml-plugin
[Rollup]: https://rollupjs.org/
