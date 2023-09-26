const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/api/customers', (req,res)=>{
    res.json({
        message: 'get data berhasil',
        data: [
            {
                name: 'Ryan',
                username: 'Yann De Coupe',
                role: 'Controller'
            },
            {
                name: 'Malek',
                username: 'Doom',
                role: 'Sentinel'
            },
            {
                name: 'Hafiz',
                username: 'ThreeSaKeN',
                role: 'Duelist'
            }
        ]
    })
})

app.post('/api/customers', (req, res) => {
    const { name, username, role } = req.body;

    // res.send(`thank you, ${name} with username: ${username} and role ${role} weh have rechieved your sbumission`);
    res.json({
        message: "create data berhasil!",
        data: {
            name: name,
            username: username,
            role: role
        }
    })
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening in port ${port}`)
})