const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    
    post_title:{
        type:String,
    },
    post_para:{
        type:String,
    } ,
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    author_id:{
        // type:mongoose.Schema.ObjectId,
        type:mongoose.Schema.Types.ObjectId,
        ref:'AUTHOR'
    },

})

const Post = mongoose.model('POST',postSchema);
module.exports= Post;