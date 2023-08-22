const userModel = require('../models/user_model');
const bcrypt = require('bcrypt');
// initialize bodyparsers for post requests
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const authController = {
    login : async (req, res) => {
        const {username, password} = req.body;

        try {
            const user = await userModel.getUserByUsername(username);
            if(!user) {
                return res.status(401).json({authenticated: false, error: 'Authentication Failed'});
            }

            const validPass = await bcrypt.compare(password, user.password);

            if(!validPass)
            {
                return res.status(401).json({authenticated: false, error: 'Authentication Failed'});
            }

            res.json({authenticated: true, message: 'Authentication Successful'});
        }
        catch(e)
        {
            res.status(500).json({ authenticated: false, error: 'Error authenticating user'});
        }
    },
    register: async (req, res) => {
        const { username, password} = req.body;

        try
        {
            const hashedPassword = await bcrypt.hash(password, 10);
            const modelResponse = await userModel.createUser(username, hashedPassword, 0);
            if (modelResponse == "success")
            {
                res.status(201).json({message: 'User registered sucessfully'});
            }
            else
            {
                res.status(500).json({error: 'Error registering user'});
            }
        }
        catch(e)
        {
            res.status(500).json({error: 'Error registering user'});
        }
    },
    checkLogin: (req, res) => {
        const token = req.session.loggedin;
    
        if (token == true)
        {
            return res.json({authenticated: true});
        }
        else
        {
            return res.json({authenticated: false});
        }
    }
}

module.exports = authController;