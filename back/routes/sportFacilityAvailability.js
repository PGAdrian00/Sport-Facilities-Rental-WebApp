const express = require("express");
const router = express.Router();
const sportFacilityAvailabilityController = require("../controllers/sportFacilityAvailability");


router.get("/", sportFacilityAvailabilityController.getAll);
router.get("/:id", sportFacilityAvailabilityController.getById);
router.post("/", sportFacilityAvailabilityController.add);
router.put("/:sportFacilityAvailabilityId", sportFacilityAvailabilityController.update);
router.delete("/:sportFacilityAvailabilityId", sportFacilityAvailabilityController.delete);


module.exports = router;