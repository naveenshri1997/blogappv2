require('../db/conn');
const Post = require('../model/postSchema');
const Author = require('../model/authorSchema');
const express = require('express');
const fs = require('fs');

module.exports.addpost = async (req,res)=>{
    const {post_title,post_para,category}= req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try{
        const auth = await Author.find({}).sort({_id:-1}).limit(1);
        console.log('auth=',auth[0],auth[0]._id);
        const data = new Post({post_title,post_para,category,image,author_id: auth[0]._id});
        const result = await data.save();

        console.log(result);
        if (result) {
            res.status(201).json({ message: 'post saved' });
        } else {
            res.status(500).json({ message: 'post not saved' })
        }
        
    }catch(e){
        console.log(e);
    }
} 


module.exports.showpost = async (req, res) => {
    try {
        const data = await Post.find({}).sort({ordering:1});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.showonepost = async (req, res) => {
    const { id } = req.params;
    try {
        
        const data = await Post.find({_id:id}).populate('author_id');
        res.send({ status: 'ok', data: data })
    } catch (error) {
        console.log(error);
    }
}


module.exports.deletepost = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Post.findOne({ _id: id });
        
        fs.unlink(data.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await Post.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Post deleted" });
        } else {
            res.status(500).json({ message: "Post not deleted" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updatepost = async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        var data = {
            post_title: req.body.post_title, 
            post_para: req.body.post_para, 
            category: req.body.category,            
            image: req.file.path,
        }
    } else {
        var data = {
            post_title: req.body.post_title, 
            post_para: req.body.post_para, 
            category: req.body.category,              
        }
    }
    try {
        if (data.image) {
            const data1 = await Post.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Post.updateOne({ _id: id },
            data
        )
        if (result) {
            res.status(201).json({ message: 'Post data updated success' });
        } else {
            res.status(500).json({ error: "Post not updated" });
        }
    } catch (error) {

    }
}



module.exports.showpost_auth = async (req,res)=>{
    try{
    const data = await Post.aggregate([{$lookup:{from:"authors",localField:"author_id",foreignField:"_id",as:"author",},}]);
    // const data = await Author.find();
    res.send({status:'ok',data:data})    
    }
    catch(error){
        console.log(error);
    }
} 