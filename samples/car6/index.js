"use strict";
var raceCar_1 = require("./raceCar");
var stang = new raceCar_1.RaceCar('Mustang', 150, 10);
var ford = new raceCar_1.RaceCar('Ford', 160, 20);
var stangAtope = stang.aTodoGas();
var fordAtope = ford.aTodoGas();
stangAtope.then(function (car) {
    console.log("STANG FULL " + car.currentSpeed);
});
fordAtope.then(function (car) {
    console.log("FORD FULL " + car.currentSpeed);
});
Promise.race([stangAtope, fordAtope]).then(function (car) {
    console.log(car.make);
});
