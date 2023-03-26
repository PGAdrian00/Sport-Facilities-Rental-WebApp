const express = require("express");
const router = express.Router();
const sportFacilityAvailabilityController = require("../controllers/sportFacilityAvailability");
const otherController = require("../controllers/other");

router.get("/", sportFacilityAvailabilityController.getAll);
router.post("/", sportFacilityAvailabilityController.add);
router.put("/:sportFacilityAvailabilityId", sportFacilityAvailabilityController.update);
router.delete("/:sportFacilityAvailabilityId", sportFacilityAvailabilityController.delete);


module.exports = router;