const db = require("../services/db");

function getAll() {
    const allMuscles = db.query(`SELECT id, functio, lat_name as latinName, name as engName FROM musclesearch`, [], (err, rows) => {
        if(err) {
            
        }
    });
    /* Returns the json string */
    return {
        allMuscles
    }
}

module.exports = {
    getAll
}