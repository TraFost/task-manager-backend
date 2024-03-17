import express from "express";
import { getAllUsers, createNewUser } from "../controller/userTasks.js";

const router = express.Router();

// users
router.get("/get-all-users", getAllUsers);
router.post("/create-new-user", createNewUser);

export default router;
