const express = require('express')
const app = express()
const port = 3000

require('./frontend.js')()
initFrontend(app, express);

require('./backend.js')()
initBackend(app, express);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))