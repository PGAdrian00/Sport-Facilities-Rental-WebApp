const express = require("express");
const router = express.Router();
const sportFacilityAvailabilityController = require("../controllers/sportFacilityAvailability");


router.get("/", sportFacilityAvailabilityController.getAll);
router.get("/:id", sportFacilityAvailabilityController.getById);
router.post("/:id", sportFacilityAvailabilityController.add);
router.put("/:sportFacilityAvailabilityId", sportFacilityAvailabilityController.update);
router.delete("/:id", sportFacilityAvailabilityController.delete);
router.post("/:id/:userId", sportFacilityAvailabilityController.rentThePlace);


module.exports = router;