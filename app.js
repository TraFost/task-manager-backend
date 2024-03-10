import express from "express";
import * as dotenv from "dotenv";

import tasksRoutes from "./routes/tasksRoutes.js";

import "./utils/connection.js";
import "./controller/userTasks.js";

const app = express();

dotenv.config();

app.use("/api/tasks/v1", tasksRoutes);

app.listen(process.env.SERVER_PORT, () => {
	console.log("Server started on port 5300");
});
