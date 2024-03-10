import { connection } from "../utils/connection.js";

export const getUserTasks = async () => {
	const [result] = await connection.query("SELECT * FROM `user_task`");
	// res.send(result);
	console.log(result, "<");
};
