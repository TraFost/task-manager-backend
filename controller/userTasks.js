import { connection } from "../utils/connection.js";

export const getAllUsers = async (req, res) => {
	const [result] = await connection.query("SELECT * FROM `users`");

	res.send({
		status: 200,
		data: {
			users: result,
		},
	});
};

export const createNewUser = async (req, res) => {
	const { username, password } = req.body;

	try {
		const [result] = await connection.query(
			`INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
		);

		return res.send({
			status: 200,
			message: "Successfully created new user",
			data: {
				id: result.insertId,
				username,
			},
		});
	} catch (err) {
		return res.send({
			status: 500,
			message: "Internal server error",
		});
	}
};
