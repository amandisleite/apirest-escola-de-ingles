const bodyParser = require("body-parser");

const pessoas = require("./pessoasRoute");
const turmas = require("./turmasRoute");
const niveis = require("./niveisRoute");
const matriculas = require("./matriculasRoute");

module.exports = app => {
    app.use(bodyParser.json());

    app.use(
        pessoas,
        turmas,
        niveis,
        matriculas
    )
}
