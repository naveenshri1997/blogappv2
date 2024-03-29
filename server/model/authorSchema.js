const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
        name:{
            type:String,
        },
        author_image:{
            type:String,
        },         
        time :{
             type : Date, 
             default: Date.now
             }

})

const Author = mongoose.model('AUTHOR',authorSchema);
module.exports = Author;