/*
 *
 * Query muscle by id
 *
 */

const db = require("../services/db");

function getMuscleId(mId) {

    $getMuscleIdQueryShort = `
    SELECT
    
    m.id,
    m.lat_name as latinName

    FROM tbl_muscles as m

    WHERE m.id = ${mId}
    `;

    $getMuscleIdQuery = `
    SELECT DISTINCT
    m.id,
    m.functio,
    m.lat_name as latinName,
    m.artery as artery_id,
    m.vein as vein_id,
    m.nerve as nerve_id,
    (SELECT a.lat_name from tbl_arteries a where a.id = m.artery) as artery,
    (SELECT v.lat_name from tbl_veins v where v.id = m.vein) as vein,
    (SELECT n.lat_name from tbl_nerves n where n.id = m.nerve) as nerve,

    gt.id as MuscleGroups_id,
    gt.name as MuscleGroups_name,
    gt.lat_name as MuscleGroups_latinName,

    (SELECT aa.id FROM tbl_arteries aa WHERE aa.id = la.artery_id) as muscleArteries_id,
    (SELECT aa.name FROM tbl_arteries aa WHERE aa.id = la.artery_id) as muscleArteries_name,
    (SELECT aa.lat_name FROM tbl_arteries aa WHERE aa.id = la.artery_id) as muscleArteries_latinName,

    (SELECT vv.id FROM tbl_veins vv WHERE vv.id = lv.vein_id) as muscleVeins_id,
    (SELECT vv.name FROM tbl_veins vv WHERE vv.id = lv.vein_id) as muscleVeins_name,
    (SELECT vv.lat_name FROM tbl_veins vv WHERE vv.id = lv.vein_id) as muscleVeins_latinName,

    (SELECT nn.id FROM tbl_nerves nn WHERE nn.id = ln.nerve_id) as muscleNerves_id,
    (SELECT nn.name FROM tbl_nerves nn WHERE nn.id = ln.nerve_id) as muscleNerves_name,
    (SELECT nn.lat_name FROM tbl_nerves nn WHERE nn.id = ln.nerve_id) as muscleNerves_latinName,

    m.image as image,
    ifnull(m.comment, 'N/A') as comment
    FROM tbl_muscles as m

    INNER JOIN view_grouptree gt on m.musclegroup_id = gt.bottomgroupid
    INNER JOIN tbl_link_arteries la on m.id = la.muscle_id
    INNER JOIN tbl_link_veins lv on m.id = lv.muscle_id
    INNER JOIN tbl_link_nerves ln on m.id = ln.muscle_id

    WHERE m.id = ${mId}`;

    console.log("SQL query:");
    console.log($getMuscleIdQuery);

    console.log("Queried muscle id: " + mId);

    //const testMuscle = db.get()


    const allMuscle = db.query($getMuscleIdQuery, [], (err, rows) => {
        if(err) {
            return err;
        }
    });
    /* Returns the json string */
    return {
        allMuscle        
    }
}

module.exports = {
    getMuscleId
}