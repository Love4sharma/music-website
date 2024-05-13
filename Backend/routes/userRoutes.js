const express = require("express");
const router = express.Router();

//import controllers
const { signin, signup } = require("../controllers/userController");
const auth = require("../middlewares/auth");
//mapping api's
router.post("/home/signup", signup);
router.post("/home/login", signin);

router.get("/home/logout", (req, res) => {
  res.clearCookie("token").status(200).json({
    success: true,
    message: "user logged out successfully",
  });
});

router.get("/testRoute", auth, (req, res) => {
  console.log(req.user.email);
  res.json({
    message: "working for " + req.user.email + " having id :" + req.user.userid,
  });
});

//export
module.exports = router;
