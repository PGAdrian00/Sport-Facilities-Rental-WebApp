const express = require("express");
const router = express.Router();
const rentalController = require('../controllers/rental');

router.get('/', rentalController.getAll);
router.get('/:id', rentalController.getById);
router.post('/', rentalController.add);
router.put('/:id', rentalController.updateById);
router.delete('/:id', rentalController.deleteById);

module.exports= router;