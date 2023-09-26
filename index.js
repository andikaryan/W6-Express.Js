const express = require('express');
const app = express();

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

const port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening in port ${port}`)
})