"use strict";

class Car {
    constructor(make) { //constructors!
        this.make = make;
      this.currentSpeed = 25;
    }
    
    printCurrentSpeed(){
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}

class RaceCar extends Car { //inheritance
   
    constructor(make, topSpeed, acceleration) {
        super(make); //call the parent constructor with super
        this.topSpeed = topSpeed;
        this.acceleration = acceleration;
    }

   goFast(){
          this.currentSpeed = this.topSpeed;
    }

    aTodoGas(){
      console.log("time acelerating");
      console.log(((this.topSpeed - this.currentSpeed) / this.acceleration) * 1000);
      return new Promise ((resolve, reject) =>{
        setTimeout(()=> {
            this.currentSpeed = this.topSpeed;
            resolve(this);
        }, ((this.topSpeed - this.currentSpeed) / this.acceleration) * 1000);
      });
    }
}

let stang = new RaceCar('Mustang', 150, 10);
let ford = new RaceCar('Ford', 160, 20);

var stangAtope = stang.aTodoGas();
var fordAtope = ford.aTodoGas();

stangAtope.then((car) => {
  console.log ("STANG FULL " + car.currentSpeed);
});

fordAtope.then((car) => {
  console.log ("FORD FULL " + car.currentSpeed);
});

Promise.race([stangAtope, fordAtope]).then((car) =>{
  console.log(car.make);
});
