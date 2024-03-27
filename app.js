import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

import "./utils/connection.js";
import "./controller/userTasks.js";

const app = express();

dotenv.config();

var corsOptions = {
	origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", userRoutes);
app.route("/").get(() => {
	res.send("HALLO!");
});

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Server is running on port ${process.env.SERVER_PORT}.`);
});
