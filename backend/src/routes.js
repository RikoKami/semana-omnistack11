const express = require('express')

const routes = express.Route();

routes.post('/users', (req, res) => {
    return res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Larissa Dantas'
    })
});

module.exports = routes;