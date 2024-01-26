require('../db/conn');
const Author = require('../model/authorSchema');
const express = require('express');
const fs = require('fs');

module.exports.addauthor = async (req,res)=>{
    const {name}= req.body;
    const author_image = req.file.path;
    console.log(author_image);
    console.log(req.file, req.body);
    try{
        const data = new Author({name,author_image});
        const result = await data.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'Author saved' });
        } else {
            res.status(500).json({ message: 'Author not saved' })
        }
        
    }catch(e){
        console.log(e);
    }
} 

module.exports.showauthor = async (req, res) => {
    try {
        const data = await Author.find({}).sort({ordering:1});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}


module.exports.showoneauthor = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Author.findOne({ _id: id });
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteauthor = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Author.findOne({ _id: id });
        fs.unlink(data.author_image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await Author.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Author delete" });
        } else {
            res.status(500).json({ message: "Author not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateauthor = async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        var data = {
            name: req.body.name,            
            author_image: req.file.path,
        }
    } else {
        var data = {
            name: req.body.name,            
        }
    }
    try {
        if (data.author_image) {
            const data1 = await Author.findOne({ _id: id });
            fs.unlink(data1.author_image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Author.updateOne({ _id: id },
            data
        )
        if (result) {
            res.status(201).json({ message: 'Author data updated success' });
        } else {
            res.status(500).json({ error: "Author not updated" });
        }
    } catch (error) {

    }
}





