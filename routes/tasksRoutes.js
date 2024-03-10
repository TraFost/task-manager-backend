import express from "express";
import { getUserTasks } from "../controller/userTasks.js";

const router = express.Router();

router.route("/get-all-tasks").get((_, res) => {
	getUserTasks();
	res.send("Hello World!!@@");
});

export default router;
