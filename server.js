var express = require('express')
var app = express()

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('/index.html');
});


// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));
