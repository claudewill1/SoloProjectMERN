const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
// module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      console.log("token payload is", payload);
      req.body.user_id = payload.id;
      next();
    }
  });
};
