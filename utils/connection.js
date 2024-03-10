import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();

export const connection = await mysql.createConnection(
	`${process.env.DB_HOST}/${process.env.DB_NAME}`
);

const [result, fields] = await connection.query("SELECT * FROM `user_task`");

console.log(result, fields);
