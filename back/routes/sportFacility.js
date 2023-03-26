const express = require("express");
const router = express.Router();
const sportFacilityController = require("../controllers/sportFacility");
const otherController = require("../controllers/other");

router.get("/", sportFacilityController.getAll);
router.post("/", sportFacilityController.add);
router.put("/:sportFacilityId", sportFacilityController.update);
router.delete("/:sportFacilityId", sportFacilityController.delete);


module.exports = router;