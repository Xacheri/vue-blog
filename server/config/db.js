require('dotenv').config();
const mysql = require('mysql');

const USERNAME = process.env.MYSQL_USER;
const PASSWORD = process.env.MYSQL_PASSWORD;

const db = mysql.createConnection({
    host: "localhost",
    user: USERNAME,
    password: PASSWORD,
    database: "yolk-blog_db"
});

module.exports = db;