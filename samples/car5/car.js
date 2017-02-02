"use strict";

export class Car {
    constructor(make) { 
        this.make = make;
      this.currentSpeed = 25;
    }
    
    printCurrentSpeed(){
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}
