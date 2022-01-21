const database = require("../models");

class Turmas {
    static async pegaTodasTurmas(req, res)  {
        try {
            const todasTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params;

        try{
            const umaTurma = await database.Turmas.findOne( { where: { id: Number(id) }});
            return res.status(200).json(umaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaTurma(req, res) {
        try {
            const novaTurma = req.body;
            const novaTurmaCriada = await database.Turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try{ 
            await database.Turmas.update(novasInfos, { where: { id: Number(id) }});
            const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id)} });
            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaTurma(req, res) {
        const { id } = req.params;

        try {
            await database.Turmas.destroy({ where: { id: Number(id) }});
            return res.status(200).json(`turma com id ${id} deletada`)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Turmas;