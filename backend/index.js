const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Larissa Dantas'
    })
})

app.listen(3333);