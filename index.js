const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Middleware
function LoggerMiddleware(req, res, next){
    console.log(`Request revieved at: ${new Date()}`);
    next();
};

// Handling GET All Customer
app.get('/api/customers', (req,res)=>{
    const{ keyword, category, limit} = req.query;
    res.status(200).json({
        code: 200,
        message: 'get data berhasil!',
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
        ],
        pagination: {
            total_record: 100,
            current_page: 1,
            total_page: limit
        },
        search:{
            keyword:keyword,
            category:category
        }
    })
});

// Handling POST Add Customer
app.post('/api/customers', LoggerMiddleware,(req, res) => {
    const { name, username, role } = req.body;

    res.status(201).json({
        message: "create data berhasil!",
        data: {
            name: name,
            username: username,
            role: role
        }
    })
});

// Handling GET Detail Customer
app.get('/api/customers/:id', (req,res)=>{
    const customerID = req.params.id;
    res.status(200).json({
        message: 'get data berhasil!',
        data: 
            {
                customerID: customerID,
                name: 'Ryan',
                username: 'Yann De Coupe',
                role: 'Controller'
            }
    })
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening in port ${port}`)
});