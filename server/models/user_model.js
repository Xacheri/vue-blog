const db = require("../config/db_conn");

const User = {
    getUserByUsername: async (username) => {
        try {
            let query ="SELECT * FROM users WHERE username = ?" 
            db.query(query, [username], (err, res, fields) => {
                const user = {
                    id: res[0].id,
                    username: res[0].username,
                    password: res[0].password,
                    access: res[0].access
                }
                return user;
            });
        }
        catch (err){
            throw err
        }
    },
};

module.exports = User;