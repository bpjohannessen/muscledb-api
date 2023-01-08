const express = require("express");
const router = express.Router();
const muscles = require("../services/muscles");

/* GET muscles listening */

router.get("/", (req, res) => {
    return res.json(muscles.getAll());
});

module.exports = router;