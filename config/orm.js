// dependency
let connection = require("./connection.js");

// hitting the db with CRUD operations
let orm = {
  all: function(tableInput, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(name, cb) {
    console.log("orm" + name);
    connection.query(
      "INSERT INTO cookies (cookie_flavor) VALUES (?)",
      [name],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  update: function(id, cb) {
    connection.query(
      "UPDATE cookies SET ? WHERE ?",
      [{ crumbled: true }, { id: id }],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  recycle: function(id, cb) {
    connection.query(
      "UPDATE cookies SET ? WHERE ?",
      [{ crumbled: false }, { id: id }],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  delete: function(id, cb) {
    connection.query("DELETE FROM cookies WHERE ?", [{ id: id }], function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// export orm
module.exports = orm;
