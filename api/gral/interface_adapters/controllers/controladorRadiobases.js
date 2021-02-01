'use strict';

const SourceRepository = require('../../application_business_rules/repositories/SourceRepository');
const SourceDB = require('../storage/SourceRepositoryMongo');
const radiobasesDB = require('../../infraestructura/servidor/baseDatos/radiobases');
const fs = require('fs');
const sourceRepository = new SourceRepository(new SourceDB(radiobasesDB));
const sendData = require('../../application_business_rules/use_cases/sendData')(sourceRepository, fs);
const getData = require('../../application_business_rules/use_cases/getData')(sourceRepository);
const getRadiobase = require('../../application_business_rules/use_cases/getRadiobase')(sourceRepository);
const getRadiobaseByName = require('../../application_business_rules/use_cases/getRadiobaseByName')(sourceRepository);
const getDetailRadiobaseByRegion = require('../../application_business_rules/use_cases/getDetailRadiobaseByRegion')(sourceRepository);
exports.sendData = async function(request, res, next) {
    let response = await sendData(request);
    res.status(200).send(response);
};

exports.getData = async function(request, res, next) {
    let response = await getData(request);
    res.status(200).send(response);
};
exports.getRadiobase = async function(request, res, next) {
    let response = await getRadiobase(request);
    res.status(200).send(response);
};

exports.getRadiobaseByName = async function(request, res, next) {
    let response = await getRadiobaseByName(request);
    res.status(200).send(response);
};

exports.getDetailRadiobaseByRegion = async function(request, res, next) {
    let response = await getDetailRadiobaseByRegion(request);
    res.status(200).send(response);
};