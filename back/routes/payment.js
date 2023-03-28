const express = require("express");
const router = express.Router();
const paymentRouter = require("../controllers/payment");

router.get("/", paymentRouter.getAll);
router.get("/:id", paymentRouter.getById);
router.put("/:id", paymentRouter.updateById);
router.delete("/:id", paymentRouter.deleteById);

module.exports=router;