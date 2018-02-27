var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var VerifyToken = require('../../auth/VerifyToken');
var genericJob = require('./GenericJob');

router.post('/addGenericJob', VerifyToken, function (req, res, next) {
    genericJob.create(req.body,
        function (err, genericJob) {
            if (err) return res.status(500).send("There was a problem in adding an genericJob")
            res.status(200).send(genericJob);
        }
    )
})

router.get('/getallgenericjobs', VerifyToken, function (req, res, next) {
    genericJob.find({}, function (err, genericJob) {
        if (err) return res.status(500).send("There was a problem finding the genericJob.");
        if (!genericJob) return res.status(404).send("No genericJob found.");
        res.status(200).send(genericJob);
    });
});

module.exports = router;