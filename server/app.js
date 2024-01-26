const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

require('./model/userSchema');
require('./model/authorSchema');
require('./model/postSchema');
const app = express();
app.use(express.json());
dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(cors());
app.use(
    cors({
      origin: "https://localhost:3000/",
    })
);



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('public/upload'));
app.use(
    cors({
        origin: "*",
    })
)

app.use(express.json());
app.use(require('./router/auth'));
const PORT= process.env.PORT||5000||'localhost';

app.get('/', (req, res) => {
    res.send('hello from server');
});
app.listen(PORT,(req,res)=>{
    console.log('listen');
})