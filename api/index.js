const express = require("express");
const routes = require("./routes");

const app = express();

const port = 3007;

routes(app);

app.listen(port, (req, res) => console.log(`servidor rolando na porta ${port}`));

module.exports = app;