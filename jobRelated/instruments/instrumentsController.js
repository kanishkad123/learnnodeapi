var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var VerifyToken = require('../../auth/VerifyToken');
var instrument = require('./Instrument');


router.post('/addInstrument', VerifyToken, function (req, res, next) {
    instrument.create({
        instrumentID: req.body.instrumentID,
        instrumentName: req.body.instrumentName,
        instrumentDescription: req.body.instrumentDescription
    },
        function (err, instrument) {
            if (err) return res.status(500).send("There was a problem in adding an instrument")
            res.status(200).send(instrument);
        }
    )
})

router.get('/getallinstruments', VerifyToken, function (req, res, next) {
    instrument.find({}, function (err, instrument) {
        if (err) return res.status(500).send("There was a problem finding the instruments.");
        if (!instrument) return res.status(404).send("No instruments found.");
        res.status(200).send(instrument);
    });
});

router.get('/getallinstruments/:instrumentID', VerifyToken, function (req, res) {
    instrument.findOne(req.params.instrumentID, function (err, instrument) {
        if (err) return res.status(500).send("There was a problem finding the instrument." + err);
        if (!instrument) return res.status(404).send("No instrument found.");
router.get('/getInstrumentById/:id', VerifyToken, function (req, res, next) {
    instrument.findOne({instrumentID:req.params.id}, function (err, instrument) {
        if (err) return res.status(500).send("There was a problem finding the instruments.");
        if (!instrument) return res.status(404).send("No instruments found.");
        res.status(200).send(instrument);
    });
});

router.put('/getallinstruments/:instrumentID', VerifyToken, function (req, res) {
    instrument.update(req.params.instrumentID, {
        instrumentName: req.body.instrumentName,
        instrumentDescription: req.body.instrumentDescription
    },
        function (err, instrument) {
            if (err) return res.status(500).send("There was a problem in adding an instrument")
            res.status(200).send(instrument);
        }
    );
router.put('/updateInstrument/:id', VerifyToken, function (req, res, next) {
    instrument.findOneAndUpdate({instrumentID:req.params.id},
        {instrumentName:req.body.instrumentName,instrumentDescription:req.body.instrumentDescription},
        function (err, instrument) {
        if (err) return res.status(500).send("There was a problem finding the instruments and updating it.");
        if (!instrument) return res.status(404).send("No instruments found.");
        res.status(200).send(instrument);
    });
});

module.exports = router;