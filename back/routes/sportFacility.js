const express = require("express");
const router = express.Router();
const sportFacilityController = require("../controllers/sportFacility");


router.get("/", sportFacilityController.getAll);
router.get("/:id", sportFacilityController.getById);
router.post("/", sportFacilityController.add);
router.put("/:id", sportFacilityController.updateById);
router.delete("/:id", sportFacilityController.deleteById);


module.exports = router;