"use strict";
var Car = (function () {
    function Car(make) {
        this.make = make;
        this.currentSpeed = 25;
    }
    Car.prototype.printCurrentSpeed = function () {
        console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    };
    return Car;
}());
exports.Car = Car;
