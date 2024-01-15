const express = require("express");
const calculationsController = require("../controllers/calculations");
const router = express.Router();
const { verifyJwt } = require("../middleware/auth");

router.get("/", verifyJwt, budgetController);

router.get("/", calculationsController);

router.post("/", calculationsController);

router.put("/:", calculationsController);

router.delete("/:", calculationsController);

module.exports = router;
