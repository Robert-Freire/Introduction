// https://jsbin.com/mudakeg/edit?js,console
"use strict";
function Car( make ) { //approximate a class/constructor
   this.make = make;
   this.currentSpeed = 25;
    
   this.printCurrentSpeed = function(){ //expose a function
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    };
}
 
// Instantiate a new car
var moderatelyPricedCar = new Car( "Kia");
moderatelyPricedCar.printCurrentSpeed();