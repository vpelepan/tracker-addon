# Tracking addon

This addon tracks [Prebid.js](http://prebid.org/developers.html) events.

> The repository also contains basic test page which describes how to connect this addon to your page and use with Prebid.js.

Additional documentation can be found at [the Prebid homepage](http://prebid.org).

## Installation

Install via [npm](https://www.npmjs.com/)

```bash
$ git clone https://github.com/vpelepan/event-tracker-addon.git
$ cd /project/
$ npm install
```

## Running the test page

```bash
$ npm start
```

> Runs a local server on [http://localhost:8080](http://localhost:8080)

## Test locally

To run the unit tests:

```bash
$ npm test
```


To generate coverage report in test logs:

```bash
$ npm run test:coverage
```

## Build for Production

```bash
$ npm run build
```

Output will be stored in `./build` directory.

## Code Quality

Code quality is defined by .eslintrc and is consistent with Prebid.js

## Supported Browsers

This addon is supported on IE11 and modern browsers.
