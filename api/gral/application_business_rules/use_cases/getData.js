'use strict';

const register = (sourceRepository) => async(request) => {
    console.log("Consulta de radiobases");
    try {
        let data = await sourceRepository.getData();
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


module.exports = register;