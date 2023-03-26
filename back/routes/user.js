const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const otherController = require("../controllers/other");

router.post("/", userController.add);
router.get("/", userController.getAll);

module.exports = router;