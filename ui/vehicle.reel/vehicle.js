/**
 * @module ui/vehicle.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Vehicle
 * @extends Component
 */
exports.CarController = Component.specialize(/** @lends Vehicle# */ {
    constructor: {
        value: function CarController() {
            this.super();
        }
    },
    object: {value:null}
});
