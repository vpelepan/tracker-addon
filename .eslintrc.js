const allowedModules = require("./allowedModules");

module.exports = {
  "env": {
    "browser": true,
    "commonjs": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "./"]
      }
    }
  },
  "extends": "standard",
  "plugins": [
    "import"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "comma-dangle": "off",
    "semi": "off",
    "space-before-function-paren": "off",
    "import/extensions": ["error", "ignorePackages"],
    "eqeqeq": "off",
    "no-return-assign": "off",
    "no-throw-literal": "off",
    "no-undef": 2,
    "no-useless-escape": "off",
    "no-console": "error"
  },
  "overrides": Object.keys(allowedModules).map((key) => ({
    "files": key + "/**/*.js",
    "rules": {
      "prebid/validate-imports": ["error", allowedModules[key]]
    }
  }))
};
