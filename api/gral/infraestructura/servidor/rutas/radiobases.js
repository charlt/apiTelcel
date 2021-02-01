'use strict';

let express = require('express'),
    router = express.Router(); //Routing;
const controller = require('../../../interface_adapters/controllers/controladorRadiobases');

router.post('/sendData', controller.sendData);
router.get('/getAllData', controller.getData);

router.get('/getRadioBase/:radiobase', controller.getRadiobase);

router.get('/getRadiobaseByName', controller.getRadiobaseByName);

router.get('/searchRegion/:radiobase', controller.getDetailRadiobaseByRegion);
module.exports = router;