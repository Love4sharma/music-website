const jwt = require("jsonwebtoken");
require("dotenv").config();
async function auth(req, res, next) {
  try {
    // console.log(req.headers.authorization);
    console.log("token from body" + req.query.token);
    // console.log(req.cookies.token);
    // const token = req.cookies.token;
    const token = req.headers.authorization || req.query.token;
    console.log(token);
    if (token) {
      try {
        let payload = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = payload;
        //    console.log(req.user);
        next();
      } catch (error) {
        console.log("JWT verification failed:", error);
        console.log("jwt failed to which /login is hitting");
        return res.redirect("/login");
      }
    } else {
      console.log("token not found");
      return res.redirect("/login");
    }
  } catch (error) {
    return res.json({
      message: "internal server error",
      error: error.message,
    });
  }
}

module.exports = auth;
