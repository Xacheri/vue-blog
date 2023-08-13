// import express.js for use in this file
const express = require("express");
const db = require("./config/db");
// initialize express into app
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

// what port the server should run on
const PORT = 3001;

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

app.post('/api/login', urlencodedParser, (req, res) => {
    let data = req.body;

    let user = data.username;
    let password = data.password;

    db.query("SELECT * FROM `users` WHERE username = ? AND password = ?", [user, password], function (err, rows, fields) {
        if (err) throw err;
        if (rows.length > 0)
        {
            res.redirect("http://localhost:5174/");
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