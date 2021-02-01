'use strict';

const getDetailRadiobaseByRegion = (sourceRepository) => async(request) => {
    console.log("Consulta de detalle radiobase por region");
    try {
        let data = await sourceRepository.getDetailRadiobaseByRegion(request);
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


module.exports = getDetailRadiobaseByRegion;