const express = require("express");
const budgetController = require("../controllers/budget");
const router = express.Router();
const { verifyJwt } = require("../middleware/auth");

router.get("/", budgetController.listBudgetItems);

router.get("/", budgetController.listBudgetItemsByUser);

router.post("/", budgetController.updateSalary);

module.exports = router;
