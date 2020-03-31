const generateUniqueId = require('../utils/generateUniqueId')
/* Conexão com o banco de dados */
const connection = require('../database/connections');

module.exports = {
    async create(req,res) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id = generateUniqueId() 
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return res.json({ id });
    },

    async list(req,res){
        const ongs = await connection('ongs').select('*')
        return res.json(ongs);        
    },
};