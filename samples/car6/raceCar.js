"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Car_1 = require("./Car");
var RaceCar = (function (_super) {
    __extends(RaceCar, _super);
    function RaceCar(make, topSpeed, acceleration) {
        var _this = _super.call(this, make) || this;
        _this.topSpeed = topSpeed;
        _this.acceleration = acceleration;
        _this.topSpeed = topSpeed;
        _this.acceleration = acceleration;
        return _this;
    }
    RaceCar.prototype.goFast = function () {
        this.currentSpeed = this.topSpeed;
    };
    RaceCar.prototype.aTodoGas = function () {
        var _this = this;
        console.log("time acelerating");
        console.log(((this.topSpeed - this.currentSpeed) / this.acceleration) * 1000);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.currentSpeed = _this.topSpeed;
                resolve(_this);
            }, ((_this.topSpeed - _this.currentSpeed) / _this.acceleration) * 1000);
        });
    };
    return RaceCar;
}(Car_1.Car));
exports.RaceCar = RaceCar;
