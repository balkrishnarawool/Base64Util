module.exports = function() {

    this.initFrontend = function(app, express) {
        app.use(express.static(__dirname + '/public'))
        // app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
        // app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
        // app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

        app.get('/', function (req, res) {
            res.sendFile(__dirname + '/public/index.html');
        })
    }
}