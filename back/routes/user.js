const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const otherController=require("../controllers/other");

router.get("/",userController.getAll);
router.get("/email", userController.getByEmail);
router.get("/:id", userController.getById);

router.post("/", userController.add);
router.get('/verificareLogareUtilizator/:usernameF/:parolaF',userController.verificareLogareUtilizator);


module.exports = router;