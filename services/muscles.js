const db = require("../services/db");

/*
 * search query
 */
// $getAllQuery = `
// SELECT
//     id,
//     origo,
//     insertio,
//     ifnull(comment, 'N/A'),
//     image,
//     vein as vein_id,
//     nerve as nerve_id,
//     functio,
//     lat_name as latinName,
//     name as engName
// FROM musclesearch`;

$getAllQuery = `
SELECT
    id,
    functio,
    lat_name as latinName,
    name as engName
FROM musclesearch`;


function getAll() {
    const allMuscles = db.query($getAllQuery, [], (err, rows) => {
        if(err) {
            return err;
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