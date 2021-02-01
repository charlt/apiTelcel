let express = require('express'),
    app = express(),
    cors = require('cors');

let port = process.env.PORT || 3000;
let mongoDB = require('./api/config/infraestructura/mongoDB');
require('dotenv').config();

function connnectToMongo() {
    mongoDB.DBConnectMongoose(process.env.MONGODB_URL)
        .then(() => {
            console.log('Conexion a BD exitosa.')
        })
        .catch(err => {
            console.log('Error: ' + err);
            connnectToMongo(process.env.MONGODB_URL);
        });
}
connnectToMongo();
let allowedOrigins = ['http://localhost:4200'];
app.use(cors({ origin: allowedOrigins, credentials: true }));
let routes = require('./api/gral/infraestructura/servidor/rutas/radiobases');
app.use('/api', routes);
app.listen(port, function() {
    console.log('Servidor web escuchando en el puerto: ' + port);
});