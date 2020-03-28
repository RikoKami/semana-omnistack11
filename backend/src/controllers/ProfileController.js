const connection = require('../database/connections');

module.exports = {
    //Listando casos específicos de uma ONG
    async index (req, res) {
        const ong_id = req.headers.authorization;
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return res.status(200).json(incidents);
    }
}