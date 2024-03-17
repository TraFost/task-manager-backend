import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

import userRoutes from "./routes/userRoutes.js";

import "./utils/connection.js";
import "./controller/userTasks.js";

const app = express();

dotenv.config();

app.use(bodyParser.json()); // for parsing application/json

app.use("/api/v1/", userRoutes);
app.route("/").get(() => {
	res.send("HALLO!");
});

app.listen(process.env.SERVER_PORT, () => {
	console.log("Server started on port 5300");
});
