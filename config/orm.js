let connection = require("./connection.js");

function printQuestionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  let arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

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
      `INSERT INTO cookies (cookie_flavor) VALUES (?)`,
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

  update2: function(id, cb) {
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

module.exports = orm;

// create: function(table, cols, vals, cb) {
//     let queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
