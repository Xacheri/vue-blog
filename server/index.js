// import and configure dotenv
require('dotenv').config();
// import express.js for use in this file
const express = require("express");
const db = require("./config/db");
const session = require("express-session");
const cors = require('cors');
// initialize express into app
const app = express();
const bodyParser = require('body-parser');

// set constants for dotenv variables
const DEVURL = process.env.DEVSERVER_URL;
const SECRET = process.env.SESSION_SECRET;

// initialize bodyparsers for post requests
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

// what port the server should run on
const PORT = 3001;


const checkAuthentication = (req, res, next) => {
    const token = req.session.loggedin;

    if (token == true)
    {
        next()
    }
    else
    {
        return res.json({authenticated: false});
    }
}

app.use(session({
    secret: SECRET,
    resave: true,
    saveUninitialized: true,
}));

app.use(cors());

app.get('/', (req, res) => {
    db.connect(function(err){
        if (err)
        {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server');
        res.render()
    })
    // db.query("INSERT INTO post {title, content, author, date, tags} VALUES {'Test Title', 'this is a test of the database', Dev, "+Date.now().toString()+", '['hidden','dev']'}");
});

app.get('/api/authenticated', checkAuthentication, (req, res) => {
    res.json({authenticated: true});
});

// TODO: Build against SQL Injection
app.post('/api/login', urlencodedParser, (req, res) => {
    let data = req.body;

    let user = data.username;
    let password = data.password;


    db.query("SELECT * FROM `users` WHERE username = ? AND password = ?", [user, password], function (err, rows, fields) {
        if (err) throw err;
        if (rows.length > 0)
        {
            req.session.loggedin = true;
            req.session.username = user;
            
            res.redirect(DEVURL + "create");
        }
        else
        {
            res.redirect("https://www.google.com");
        }
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});