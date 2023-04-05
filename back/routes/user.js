const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const otherController=require("../controllers/other");

router.get("/",userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.add);


module.exports = router;