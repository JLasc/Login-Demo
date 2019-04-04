var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

var PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, (err) => {
    if (err) throw err
    console.log('Server connection established')
})