# apiTelcel
En esta API se engloba el funcionamiento de las consultas de radiobases, asi como el llenado de la base de datos.

Esta construido por un modelo mvc, express.


## Installation

Usar npm install dentro del folder principal


## Endpoints
url: localhost:3000 | https://examentelcel.herokuapp.com


[POST] {{url}}/api/sendData

Endpoint generado para llenar la db junto con todas las radiobases del archivo csv que ha sido proporcionado.


[GET] {{url}}/api/getAllData

Endpoint generado para traer todos las radiobases, agrupadas por su nombre.


[GET] {{url}}/api/getRadioBase/:radiobase

Endpoint generado para la busqueda de coincidencias de radiobases por medio de su nombre.

[GET] {{url}}/api/getRadiobaseByName?name=
queryString Parameters: name
Endpoint generado para la busqueda de una radiobase por medio de su nombre.


[GET] {{url}}//api/searchRegion/:radiobase?region=5
queryString Parameters: region
Endpoint generado para la busqueda del detalle de una radiobase filtrando por la region.



