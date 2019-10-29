let express = require('express');
let router = express.Router();
let models = require('../../db/index');
let utils = require('../../utils/utilities');
let utilities = new utils();

//Get top 5 personal testmony
router.get('/api/testimony/get_top_testimony', (req, res) => {
    models.testimonyModel.find()
        .then(doc => {
            utilities.WriteLog(req.id, null, doc);
            res.send(utilities.FinalResponse(req.id, doc));
        })
        .catch(err => {
            utilities.WriteError(req.id, null, err);
            res.status(500).send(utilities.ExceptionResponse(req.id, err));
        })
})


// add personal testimony admin
router.post('/api/testimony/add_testimony', (req, res) => {
    if (!req.body) return res.status(404).send(utilities.UnsuccessfulResponse(req.id, `Request body cannot be empty`));

    let model = new models.testimonyModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) return res.status(500).send(utilities.UnsuccessfulResponse(req.id, `Could not create new testimony. Please try again later.`));
            res.status(201).send(utilities.FinalResponse(req.id, doc));
        })
        .catch(err => {
            res.status(500).send((utilities.ExceptionResponse(req.id, err)));
        })
})

//update personal testimony. admin
router.put('/api/testimony/update_testimony/:id', (req, res) => {
    if (!req.param.id) return res.status(404).send(utilities.UnsuccessfulResponse(req.id, `Missing URL parameter : id`));
    if (!req.body) return res.status(404).send(utilities.UnsuccessfulResponse(req.id, `Request body cannot be empty`));

    models.testimonyModel.findOneAndUpdate({
        id: req.param.id
    }, req.body, { new: true })
        .then(doc => {
            res.status(201).send(utilities.FinalResponse(req.id, doc));
        })
        .catch(err => {
            res.status(500).send(utilities.ExceptionResponse(req.id, err));
        })
})

//get one testimony admin
router.get('/api/testimony/get_one_testimony', (req, res) => {

    if (!req.query.id) return res.status(404).send(utilities.UnsuccessfulResponse(req.id, `Missing URL parameter : id`));

    models.testimonyModel.findOne({
        id: req.query.id
    })
    .then(doc => {
            utilities.WriteLog(req.id, null, doc);
            res.send(utilities.FinalResponse(req.id, doc));
        })
        .catch(err => {
            utilities.WriteError(req.id, null, err);
            res.status(500).send(utilities.ExceptionResponse(req.id, err));
        })
})

//delete personal testimony. admin
router.delete('/api/testimony/delete_testimony', (req, res) => {

    if (!req.query.id) return res.status(404).send(utilities.UnsuccessfulResponse(req.id, `Missing URL parameter : id`));

    models.testimonyModel.findOneAndRemove({
        id: req.query.id
    })
    .then(doc => {
            utilities.WriteLog(req.id, null, doc);
            res.send(utilities.FinalResponse(req.id, doc));
        })
        .catch(err => {
            utilities.WriteError(req.id, null, err);
            res.status(500).send(utilities.ExceptionResponse(req.id, err));
        })
})

module.exports = router;
