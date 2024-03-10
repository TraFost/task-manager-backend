import express from "express";
import * as dotenv from "dotenv";

import salaryRoutes from "./routes/salaryRoutes.js";

import "./utils/connection.js";

const app = express();

dotenv.config();

app.use("/api/salary/v1", salaryRoutes);

app.listen(process.env.SERVER_PORT, () => {
	console.log("Server started on port 5300");
});
