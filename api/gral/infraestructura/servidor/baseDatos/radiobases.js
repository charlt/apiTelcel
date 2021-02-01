var mongoose = require('mongoose'),
    Schema = mongoose.Schema; // MongoDB connection library;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
// Create a Mongoose schema
var radioBasesSchema = new mongoose.Schema({
    radiobase: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    trafico: {
        type: String,
        required: true
    },
});
radioBasesSchema.plugin(deepPopulate); //, options /* more on options below */);
// Register the schema
var Radiobase = mongoose.model('radiobases', radioBasesSchema);
exports.Radiobase = Radiobase;
exports.createRadiobase = function(radiobase) {
    return new Radiobase(radiobase);
}