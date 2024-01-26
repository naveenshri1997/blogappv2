const express= require('express');
const router = express.Router();
const multer = require('multer');
const uploadPhoto = require("../middleware/uploads");
const authorPhoto = require("../middleware/aut_up");
const User = require('../model/userSchema');

const {addpost,showpost,showpost_auth,deletepost,updatepost,showonepost}= require('../controller/PostController');
const {addauthor,showauthor,deleteauthor,updateauthor,showoneauthor}= require('../controller/AuthorController');

router.post('/addpost',uploadPhoto.single('image'),addpost);
router.get('/showpost',showpost);
router.get('/showonepost/:id', showonepost);
router.get('/showpost_auth',showpost_auth);
router.delete('/deletepost/:id', deletepost);
router.put('/updatepost/:id', uploadPhoto.single('image'), updatepost);

router.post('/addauthor',authorPhoto.single('author_image'),addauthor);
router.get('/showauthor',showauthor);
router.get('/showoneauthor/:id', showoneauthor);
router.delete('/deleteauthor/:id', deleteauthor);
router.put('/updateauthor/:id', authorPhoto.single('author_image'), updateauthor);

router.post('/login', async(req,res)=>{    
    try {
        const {username,password} = req.body;
        if(!username||!password){
            res.status(400).json({'msg':'username or password not entered!'})
        }        
        const userLogin = await User.findOne({username:username})

        if(!password == userLogin.password){
            res.status(400).json({'msg':'invalid password'});
        }else{
            res.json({'msg':'user login successfuly'});
        }

    } catch (error) {
        console.log(error);
    }
})
module.exports = router;