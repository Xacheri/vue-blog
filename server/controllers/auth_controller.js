const userModel = require('../')



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