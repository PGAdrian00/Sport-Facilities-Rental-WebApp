const express = require("express");
const router = express.Router();
const facilityStatusRouter=require('../controllers/facilityStatus');


router.get("/", facilityStatusRouter.getAll );
router.get("/:id", facilityStatusRouter.getById );
router.put("/",facilityStatusRouter.add);
router.post("/:id", facilityStatusRouter.updateById);
router.delete("/:id",facilityStatusRouter.deleteById);
module.exports=router;