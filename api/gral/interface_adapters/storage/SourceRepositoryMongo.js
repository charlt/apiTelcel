'use strict';


class SourceRepositoryMongo {
    constructor(client) {
        this.client = client;
    }

    async getDetailRadiobaseByRegion(req) {
        return await prom(this.client);

        function prom(cliente) {
            return new Promise(function(resolve, reject) {

                cliente.Radiobase.find({ 'radiobase': req.params.radiobase, 'region': req.query.region }).exec()
                    .then(radiobases => {
                        resolve(radiobases)
                    }).catch(err => { reject(err) })
            })

        }
    }

    async getRadiobaseByName(req) {
        return await prom(this.client);

        function prom(cliente) {
            return new Promise(function(resolve, reject) {
                cliente.Radiobase.find({ 'radiobase': { $regex: '.*' + req.query.name + '.*' } }).exec()
                    .then(radiobases => {
                        resolve(radiobases)
                    }).catch(err => { reject(err) })
            })

        }

    }
    async getRadiobase(req) {
        return await prom(this.client);

        function prom(cliente) {
            return new Promise(function(resolve, reject) {

                cliente.Radiobase.find({ 'radiobase': req.params.radiobase }).exec()
                    .then(radiobases => {
                        resolve(radiobases)
                    }).catch(err => { reject(err) })
            })

        }

    }

    async getData() {
        return await prom(this.client);

        function prom(cliente) {
            return new Promise(function(resolve, reject) {
                let query = [{
                    $group: {
                        _id: '$radiobase',
                    }
                }]
                cliente.Radiobase.aggregate(query).exec()
                    .then(radiobases => {
                        resolve(radiobases)
                    }).catch(err => { reject(err) })
            })

        }

    }
    async create(radiobase) {
        try {

            let registroRadiobase = this.client.createRadiobase(radiobase);
            await prom(registroRadiobase)

            function prom(registro) {
                return new Promise(function(resolve, reject) {
                    registro.save(function(err) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(registro);
                        }
                    })
                })

            }


        } catch (error) {
            console.log('ERROR CREATE RADIOBASE::: ', error);
        }
    }
}

module.exports = SourceRepositoryMongo;