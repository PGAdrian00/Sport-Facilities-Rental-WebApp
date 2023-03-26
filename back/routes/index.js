const express = require('express');
const router = express.Router();
const otherRouter = require('./other');
const userRouter = require('./user');
const sportFacilityRouter=require('./sportFacility');
const sportFacilityAvailabilityRouter=require('./sportFacilityAvailability');
const facilityStatusRouter=require('./facilityStatus');
const paymentRouter=require('./payment');
const rentalRouter=require('./rental');

router.use("/users", userRouter);
router.use("/sportFacilities", sportFacilityRouter);
router.use("/sportFacilityAvailabilities", sportFacilityAvailabilityRouter);
router.use("/facilitiesStatus", facilityStatusRouter);
router.use("/payments",paymentRouter);
router.use("/rentals", rentalRouter);
router.use('/',otherRouter);

module.exports = router;
