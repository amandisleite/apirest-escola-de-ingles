const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use indica que vai ter algo fazendo um meio-de-campo. será um middleware?

app.use(bodyParser.json());

const port = 3007;

app.listen(port, (req, res) => console.log(`servidor rolando na porta ${port}`));

app.get('/sequelize', (req, res) =>
    res
    .status(200)
    .send({ mensagem: 'uhul' }
    ))

module.exports = app;