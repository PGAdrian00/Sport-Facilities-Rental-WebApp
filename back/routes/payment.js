const express = require("express");
const router = express.Router();
const paymentRouter = require("../controllers/payment");

router.get("/", paymentRouter.getAll);
router.get("/:id", paymentRouter.getById);
router.put("/:id", paymentRouter.updateById);

module.exports=router;