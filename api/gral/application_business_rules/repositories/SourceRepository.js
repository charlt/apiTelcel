'use strict';
module.exports = class {
    constructor(client) {
        this.client = client;
    }

    create(radiobase) {
        return this.client.create(radiobase);
    }

    getData() {
        return this.client.getData();
    }
    getRadiobase(req) {
        return this.client.getRadiobase(req);
    }
    getRadiobaseByName(req) {
        return this.client.getRadiobaseByName(req);

    }

    getDetailRadiobaseByRegion(req) {
        return this.client.getDetailRadiobaseByRegion(req);

    }


};