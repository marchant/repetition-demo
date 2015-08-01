/**
 * @module ui/vehicle.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Vehicle
 * @extends Component
 */
exports.VehicleController = Component.specialize(/** @lends Vehicle# */ {
    constructor: {
        value: function Vehicle() {
            this.super();
        }
    },
    vehicle: {value:null}
});
