const { NiveisServices } = require("../services");
const niveisServices = new NiveisServices();

class Niveis {
    static async pegaTodosNiveis(req, res) {
        try {
            const todosNiveis = await niveisServices.pegaTodosOsRegistros();
            res.status(200).json(todosNiveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params;

        try {
            const umNivel = await niveisServices.pegaUmRegistro(Number(id));
            return res.status(200).json(umNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body;

        try {
            const novoNivelCriado = await niveisServices.criaRegistro(novoNivel);
            return res.status(200).json(novoNivelCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            await niveisServices.atualizaRegistro(novasInfos, Number(id));
            const nivelAtualizado = await niveisServices.pegaUmRegistro(Number(id));
            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaNivel(req, res) {
        const { id } = req.params;

        try {
            await niveisServices.apagaRegistro(Number(id));
            return res.status(200).json(`nível ${id} deletado`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraNivel(req, res) {
        const { id } = req.params;

        try {
            await niveisServices.restauraRegistro(Number(id));
            return res.status(200).json(`nível de id ${id} foi restaurado`);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = Niveis;