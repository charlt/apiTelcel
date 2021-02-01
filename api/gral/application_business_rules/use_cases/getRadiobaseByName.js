'use strict';

const getRadiobaseByName = (sourceRepository) => async(request) => {
    console.log("Consulta de radiobase por nombres");
    try {
        let data = await sourceRepository.getRadiobaseByName(request);
        let message = {
            "code": 200,
            "message": "SUCCESS.",
            "description": "Datos.",
            "data": data
        }
        return message
    } catch (err) {
        console.error('ERROR::: ', err);
        let message = {
            "code": 400,
            "message": "ERROR.",
            "description": "Error de servidor."

        }
        return message
    }
};


module.exports = getRadiobaseByName;