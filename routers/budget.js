const express = require("express");
const budgetController = require("../controllers/budget");
const router = express.Router();
const { verifyJwt } = require("../middleware/auth");

router.get("/", budgetController.listBudgetItems);

router.get("/user", verifyJwt, budgetController.listBudgetItemsByUser);

module.exports = router;
