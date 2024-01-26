/* 
    * Middleware to upload images via multer
*/
const multer = require("multer")
const fs = require('fs-extra');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log();
        const path= 'public/upload/author'; 
        // fs.mkdirpSync(path+`${req.body.category}`,{ recursive: true })
        cb(null,path)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})
const authupload = multer({ storage: storage })
module.exports = authupload