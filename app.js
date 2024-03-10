import express from "express";

import salaryRoutes from "./routes/salaryRoutes.js";

import * as dotenv from "dotenv";

import "./utils/connection.js";

const app = express();

dotenv.config();

app.use("/api/salary/v1", salaryRoutes);

app.get("/", (_, res) => {
	res.send("Hello World!");
});

app.listen(process.env.SERVER_PORT, () => {
	console.log("Server started on port 5300");
});
