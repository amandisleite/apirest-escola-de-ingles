const { TurmasServices } = require("../services");
const turmasServices = new TurmasServices();

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class Turmas {
    static async pegaTodasTurmas(req, res) {
        const { data_inicial, data_final } = req.query;
        const where = {};

        data_inicial || data_final ? where.data_inicio = {} : null;
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;

        try {
            const todasTurmas = await turmasServices.pegaTodosOsRegistros(where);
            return res.status(200).json(todasTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params;

        try{
            const umaTurma = await turmasServices.pegaUmRegistro(Number(id));
            return res.status(200).json(umaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaTurma(req, res) {
        try {
            const novaTurma = req.body;
            const novaTurmaCriada = await turmasServices.criaRegistro(novaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try{ 
            await turmasServices.atualizaRegistro(novasInfos, Number(id));
            const turmaAtualizada = await turmasServices.pegaUmRegistro(Number(id));
            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaTurma(req, res) {
        const { id } = req.params;

        try {
            await turmasServices.apagaRegistro(Number(id));
            return res.status(200).json(`turma com id ${id} deletada`)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraTurma(req, res) {
        const { id } = req.params;

        try {
            await turmasServices.restauraRegistro(Number(id));
            return res.status(200).json(`turma id ${id} foi restaurada`)
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = Turmas;