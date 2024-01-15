const express = require("express");
const budgetController = require("../controllers/budget");
const router = express.Router();
const { verifyJwt } = require("../middleware/auth");

router.get("/", verifyJwt, budgetController);

router.get("/", budgetController);

router.post("/", budgetController);

router.put("/:", budgetController);

router.delete("/:", budgetController);

module.exports = router;
