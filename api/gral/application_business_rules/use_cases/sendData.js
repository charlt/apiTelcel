'use strict';
const fs = require('fs');
const getStream = require('get-stream');
const parse = require('csv-parse');

const register = (sourceRepository, fs) => async(request) => {
    console.log("Generar registros en db");
    let textoResultado;
    try {
        const parseStream = parse({ delimiter: ',' });
        const data = await getStream.array(fs.createReadStream('radiobases.csv').pipe(parseStream));
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log('element :>> ', element);
            if (element[0] != "RADIOBASE" && element[0] != "﻿RADIOBASE") {
                let radiobase = {
                    radiobase: element[0],
                    fecha: element[1],
                    region: element[2],
                    trafico: element[3]
                }
                await sourceRepository.create(radiobase);
            }

        }
        //return data.map(line => line.join(',')).join('\n');
        return message = {
            "code": 200,
            "message": "SUCCESS.",
            "description": "Datos guardados."

        }
    } catch (err) {
        console.error('ERROR::: ', err);
        let message = {
            "code": 400,
            "message": "ERROR.",
            "description": "Error de servidor."

        }
        return message
    }
    return { codigoResultado: 200, textoResultado };
};


module.exports = register;