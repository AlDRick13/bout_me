const express = require('express');

const port = 9000;

const app = express();

app.get('/get', (req, res) => {
    res.json({
        name: 'Aldo',
        age: 23,
        country: 'Mexico'
    });
});

app.post('/', (req, res) => {
    res.json(
        [
            'valve',
            'xiaomi',
            'academlo'
        ]
    );
});

app.patch('/', (req, res) => {
    res.json(
        [
            'basketball',
            'bike',
            'hiking'
        ]

    );
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);

});