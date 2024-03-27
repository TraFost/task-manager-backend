import express from "express";
import {
	getAllUsers,
	createNewUser,
	deleteUser,
	updateUser,
	getUser,
} from "../controller/userTasks.js";

const router = express.Router();

// users
router.get("/get-all-users", getAllUsers);
router.get("/get-user/:id", getUser);
router.post("/create-new-user", createNewUser);
router.delete("/delete-user/:id", deleteUser);
router.put("/update-user/:id", updateUser);

export default router;
