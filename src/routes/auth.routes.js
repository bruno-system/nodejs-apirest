const router = require("express").Router();
const { login } = require("../controller/auth.controller");
const { addUser } = require("../controller/user.controller");
const { getHome } = require("../controller/home.controller");

const { userVerification } = require("../middleware");

router.post("/login", login);
router.post("/register",[userVerification.check], addUser);
router.get("/", getHome);

module.exports = router;
