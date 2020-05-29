var con = require("./connection");

function selectAll(cb) {

    con.query("select * from burgers", function(err, result) {
        if (err) throw err;
        cb(result);
    });
}

function insertOne(name, cb) {

    con.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)", [name], function(err, result) {
        if (err) throw err;
        cb(result);
    });
}

function updateOne(id, devoured, cb) {

    con.query("UPDATE burgers SET devoured=? WHERE id=?", [devoured, id], function(err, result) {
        if (err) throw err;
        cb(result);
    });

}

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.updateOne = updateOne;
