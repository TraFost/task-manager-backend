import mysql from "mysql2/promise";

export const connection = await mysql.createConnection(
	"mysql://root:root@localhost:8889/mock_gaji"
);

try {
	const [results, fields] = await connection.query("SELECT * FROM `gajian`");

	console.log(results); // results contains rows returned by server
	console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
	console.log(err, "<<<<WAWA<W");
}
