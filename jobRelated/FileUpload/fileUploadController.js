var express = require('express');
//var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var VerifyToken = require('../../auth/VerifyToken');
var guid = require('guid')
const fileUpload = require('express-fileupload');


// default options
router.use(fileUpload());
 
router.post('/upload',VerifyToken, function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
    console.log(req.files);
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('jobRelated/FileUpload/' + guid.create() + '&_&' + req.files.sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});


module.exports = router;