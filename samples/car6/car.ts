"use strict";

export class Car {
    public currentSpeed;
    constructor(public make: string) { 
      this.currentSpeed = 25;
    }
    
    printCurrentSpeed(){
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}
