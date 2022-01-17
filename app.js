const express = require("express");
const script = require("./src/script");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(function (req, res, next) {
	const { pass } = req.body;
	console.log(pass);
	if (pass.usuario === "francisco") {
		next();
	}
	res.status(401).send("Unauthorized!");
});

app.post("/", async (req, res) => {
	const { params, pass } = req.body;
	console.log("cheguei a qui");
	const resultado = await script(params, pass);
	res.send(resultado);
	res.send(200);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
