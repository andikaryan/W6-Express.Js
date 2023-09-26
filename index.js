const express = require('express');
const app = express();

app.get('/api/customer', (req,res)=>{
    res.json({
        message: 'get data berhasil',
        data: [
            {
                name: 'Ryan',
                username: 'yann',
                role: 'Lead'
            },
            {
                name: 'Verina',
                username: 'rena',
                role: 'Frontend'
            },
            {
                name: 'Angga',
                username: 'gaa',
                role: 'Backend'
            }
        ]
    })
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening in port ${port}`)
})