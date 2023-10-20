const express = require("express");
const router = express.Router();
const statusController = require("../controllers/facilityStatus");

router.get("/", statusController.getAll);
router.get("/:id", statusController.getById);
router.post("/:id", statusController.add);
router.put("/:id", statusController.updateById);
module.exports = router;