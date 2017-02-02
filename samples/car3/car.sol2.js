
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
   
    constructor(make, topSpeed) {
        super(make); //call the parent constructor with super
        this.topSpeed = topSpeed;
      
      setTimeout(() => {
          this.currentSpeed += 5;
            console.log('now going: ' + this.currentSpeed);
        }, 1000);        
    }

   goFast(){
          this.currentSpeed = this.topSpeed;
    }
}

let stang = new RaceCar('Mustang', 150);

stang.printCurrentSpeed();
