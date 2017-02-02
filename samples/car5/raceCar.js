import { Car} from "./Car"

export class RaceCar extends Car {
   
    constructor(make, topSpeed, acceleration) {
        super(make); 
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
