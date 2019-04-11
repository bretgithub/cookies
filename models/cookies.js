// dependencies, import ORM for functions to interact with db
let orm = require("../config/orm.js");

// cookie CRUD operations
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
  bakeAgain: function(id, cb) {
    console.log("ID COOKIE: " + id);
    orm.bake(id, function(result) {
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

// export cookie
module.exports = cookie;
