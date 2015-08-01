/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    _data: {
        value: [
            {
                 "make": "Toyota",
                 "modelYear": 2009,
                 "licensePlate": "A302 327904",
                 "model": "Camry"
            },
             {
                 "make": "Honda",
                 "modelYear": 2009,
                 "licensePlate": "B890 650543",
                 "model": "Civic"
             },
            {
                "make": "Acura",
                "modelYear": 2007,
                "licensePlate": "KA09 753522",
                "model": "RDX"
            },
            {
                "make": "Nissan",
                "modelYear": 2009,
                "licensePlate": "KA09 650543",
                "model": "Leaf"
            }

        ]   
    },
    data: {
        get: function() {
            return this._data;
        },
        set: function(value) {
            this._data = value;
        }
    }
});
