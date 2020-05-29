
var orm = require("../config/orm");


var burger = {
    all: function(cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    create: function(name, devoured, cb) {
        orm.insertOne(name, devoured, function(res) {
            cb(res);
        });
    },
    update: function(id, name, devoured, cb) {
        orm.updateOne(id, name, devoured, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;