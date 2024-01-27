const express = require("express");
const router = express.Router();
const muscle = require("../services/muscle");

/* GET muscles listening */
router.get('/', (req, res) => {
    return res.json({err: "no muscle id defined"});
})
router.get("/:id", (req, res) => {
    var params = [req.params.id];
    console.log("Fetching muscle id " + req.params.id);
    return res.json(muscle.getMuscleId(req.params.id));
    //return res.json(muscles.getAll());

});

module.exports = router;