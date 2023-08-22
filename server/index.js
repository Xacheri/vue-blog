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

const jsonParser = bodyParser.json();

// what port the server should run on
const PORT = 3001;

app.use(session({
    secret: SECRET,
    resave: true,
    saveUninitialized: true,
}));

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//#region GET ROUTES
app.get('/', (req, res) => {
    
});

app.get('/logincheck', checkAuthentication, (req, res) => {
    res.json({authenticated: true});
});

//#endregion GET ROUTES

//#region POST ROUTES

// TODO: Build against SQL Injection
app.post('/login', urlencodedParser, (req, res) => {
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
            res.redirect(DEVURL);
        }
    });
});

//#endregion POST ROUTES