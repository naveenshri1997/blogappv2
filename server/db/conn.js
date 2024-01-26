const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log(e,"no connection");
})
