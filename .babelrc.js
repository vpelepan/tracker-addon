let path = require('path');

function useLocal(module) {
  return require.resolve(module, {
    paths: [
      __dirname
    ]
  })
}

module.exports = {
  "plugins": [
    "@babel/plugin-transform-runtime"
  ],
  "presets": [
    [
      useLocal('@babel/preset-env'),
      {
        "targets": {
          "browsers": [
            "chrome >= 61",
            "safari >=8",
            "edge >= 14",
            "ff >= 57",
            "ie >= 11",
            "ios >= 8"
          ]
        }
      }
    ]
  ]
};
