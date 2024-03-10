import express from "express";

const router = express.Router(); // import express router

router.route("/s").get((_, res) => {
	res.send("Hello World!!@@");
});

export default router;
