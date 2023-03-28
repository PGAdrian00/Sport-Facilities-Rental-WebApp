const express = require("express");
const router = express.Router();
const facilityStatusRouter=require('../controllers/facilityStatus');


router.get("/", facilityStatusRouter.getAll );
router.get("/:id", facilityStatusRouter.getById );
module.exports=router;