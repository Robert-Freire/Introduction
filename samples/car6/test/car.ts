export class Car {
	protected currentSpeed;
    constructor(private make) { //constructors!
        this.make = make;
      this.currentSpeed = 25;
    }

    printCurrentSpeed(){
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}

var moderatelyPricedCar = new Car( "Kia");
moderatelyPricedCar.printCurrentSpeed(); 