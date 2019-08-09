module.exports = function() {

    this.initBackend = function(app, express) {
        app.use(express.json())
        //app.get('/', (req, res) => res.send('Hello World!'))
        app.get('/echo', (req, res) => res.send('Echo echo echo echo'))
        app.post('/echo', (req, res) => {
            // const name = req.body.name
            res.json({name2: req.body.name})
        })

        app.get('/encode', (req, res) => {
            var encodedMessage = Buffer.from(req.query.message).toString('base64')
            res.send(encodedMessage)
        })
        app.post('/encode', (req, res) => {
            console.log(req.body.message)
            var encodedMessage = Buffer.from(req.body.message).toString('base64')
            res.json({encodedMessage: encodedMessage})
        })

        app.get('/decode', (req, res) => {
            var decodedMessage = Buffer.from(req.query.message, 'base64').toString()
            res.send(decodedMessage)
        })
        app.post('/decode', (req, res) => {
            var decodedMessage = Buffer.from(req.body.message, 'base64').toString()
            res.json({decodedMessage: decodedMessage})
        })
    }
}