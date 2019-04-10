// dependencies, import ORM for functions to interact with db
// let express = require("express");
// object relation mapping/mapper
let orm = require("../config/orm.js");

let cookie = {
  selectAll: function(cb) {
    orm.all("cookies", function(result) {
      cb(result);
    });
  },
  insertCookie: function(name, cb) {
    console.log("coookies " + name);
    orm.create(name, function(result) {
      cb(result);
    });
  },
  eatCookie: function(id, cb) {
    console.log("ID COOKIE: " + id);
    orm.update(id, function(result) {
      cb(result);
    });
  },
  bakeCookie: function(id, cb) {
    console.log("ID COOKIE: " + id);
    orm.update2(id, function(result) {
      cb(result);
    });
  },
  deleteCookie: function(id, cb) {
    console.log("ID COOKIE: " + id);
    orm.delete(id, function(result) {
      cb(result);
    });
  }
};

module.exports = cookie;
