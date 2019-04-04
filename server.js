var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(bodyParser.json());

var userDB;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'))
});

app.get('/register/users', (req, res) => {
    res.json(userDB)
})

app.post('/login', (req, res) => {
    if (req.body) {
        var { loginInfo } = req.body;
    }
    res.json(loginInfo)
})

app.post('/register/users', (req, res) => {
    var newUserData = req.body;
    userDB = newUserData
    res.json(userDB)
})

app.listen(PORT, (err) => {
    if (err) throw err
    console.log('Server connection established')
})
