const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Task = require("./api/models/todoListModel"); //created model loading here
const Words = require("./api/models/wordModel"); //created model loading here
const bodyParser = require("body-parser");

// DB Connections
mongoose.set("useNewUrlParser", true);
mongoose.Promise = global.Promise;

mongoose
	.connect("mongodb://localhost/Tododb", {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then(() => console.log("DB Connected!"))
	.catch((err) => {
		console.log(`DB Connection Error: ${err.message}`);
	});

// Express Server Config
const allowCrossDomain = (request, result, next) => {
	result.header("Access-Control-Allow-Origin", "*");
	result.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	result.header("Access-Control-Allow-Headers", "Content-Type");
	next();
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In some way always gives a 404
// app.use((request, result) => {
// 	result.status(404).send({ url: request.originalUrl + " not found" });
// });

const routes = require("./api/routes/wordRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
