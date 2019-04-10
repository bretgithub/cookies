// dependencies and connection
let express = require("express");
let PORT = process.env.PORT || 6060;
let app = express();

// server static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

// middleware functons
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access
let routes = require("./controllers/cookie_controller.js");
app.use("/", routes);

// set listener
app.listen(PORT, function() {
  console.log("Listening at localhost:" + PORT);
});
