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
			`INSERT INTO users (username, password) VALUES (?, ?)`,
			[username, password]
		);

		return res.send({
			status: 200,
			message: "Successfully create new user",
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

export const deleteUser = async (req, res) => {
	const { id } = req.params;

	try {
		await connection.query(`DELETE FROM users WHERE id = ?`, [id]);

		return res.send({
			status: 200,
			message: "Successfully delete user",
		});
	} catch (err) {
		return res.send({
			status: 500,
			message: "Internal server error",
		});
	}
};

export const updateUser = async (req, res) => {
	const {
		params: { id },
		body: { username, password },
	} = req;

	try {
		await connection.query(
			`UPDATE users SET username = ?, password = ? WHERE id = ?`,
			[username, password, id]
		);

		return res.send({
			status: 200,
			message: "Successfully update user",
		});
	} catch (err) {
		return res.send({
			status: 500,
			message: "Internal server error",
		});
	}
};

export const getUser = async (req, res) => {
	const { id } = req.params;

	try {
		const [result] = await connection.query(
			`SELECT * FROM users WHERE id = ?`,
			[id]
		);

		const { password, ...rest } = result[0];

		return res.send({
			status: 200,
			data: {
				user: rest,
			},
		});
	} catch (err) {
		return res.send({
			status: 500,
			message: "Internal server error",
		});
	}
};
