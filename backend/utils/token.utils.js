const jwt = require('jsonwebtoken')
var createToken = function(auth) {
    return jwt.sign({
            id: auth
        }, 'my-secret',
        {
            expiresIn: 60 * 120
        });
};

module.exports = {
  generateToken: function(req, res, next) {
      console.log("testing")
      console.log(req)
      req.token = createToken(req.body.access_token);
      return next();
  },
  sendToken: function(req, res) {
      console.log("here we are")
      console.log(req.token)
      res.setHeader('x-auth-token', req.token);
      return res.status(200).send(JSON.stringify(req.user));
  }
};