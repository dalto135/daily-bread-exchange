const router = require("express").Router();
const { Post } = require('../../models');

const foodExchangeController = require("../../controller/foodExchangeController.js");

router.route("/")
.get(foodExchangeController.findAll)
.post(foodExchangeController.create)


router.route('/:id')
.delete(foodExchangeController.remove)
.get(foodExchangeController.findById)
.put(foodExchangeController.update);

router.route("/:id")
.get(foodExchangeController.findById)

module.exports = router;