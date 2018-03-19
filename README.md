# Better Webpack progress

A callback function to pass to Webpack `ProgressPlugin` to get a nicer output.


## Installation

Install with your favorite package manager:

```bash
$ yarn add --dev better-webpack-progress
```


## Usage

This package is designed to be used with the default Webpack `ProgressPlugin`.

```javascript
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const betterProgress = require('better-webpack-progress');

module.exports = {
  // ... rest of Webpack config
  plugins: [
    new ProgressPlugin(betterProgress({
      mode: 'compact',  // or 'detailed'
    })),
  ]
  // ... rest of Webpack config
};
```

## Modes

There are two modes for outputting progress info:

### Compact

Is better suited for usage in a CLI during development. Reuses CLI lines when logging.


### Detailed

Is better suited for usage in a CI environment. Doesn't reuse CLI lines when logging.


## LICENSE

[MIT](LICENSE)
