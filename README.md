# Base64Util
Utility for encoding/decoding using [Base64](https://en.wikipedia.org/wiki/Base64) encoder/ decoder

This app demonstrates following features:
- how to create ReST API using [expressjs](https://expressjs.com/)
- how to modularize frontend and backend when running on same express server
- how to create respoinsive UI using [bootstrap](https://getbootstrap.com/)
- how to automate build and test tasks using [gulp](https://gulpjs.com/). For example:
    - minifying js and css
    - clean-up
- how to use [browser-sync](https://www.browsersync.io/) to do live-reload when frontend files are changed
- how to setup gulp, browser-sync and [nodemon](https://www.npmjs.com/package/nodemon) to automatically restart express when backend files are changed


# Note:
- popper dependency is added directly (using ```npm install popper```), not via ```package.json```
- Use NodeJS version 10 or higher

# How to install:
- Run following commands from root directory:
```
npm install
gulp
```
