import { Car} from "./car"

export interface iSpeed{
    make: String;
    currentSpeed: Number;
}

export class RaceCar extends Car {
   
    constructor(make, protected topSpeed: number, protected acceleration: number) {
        super(make); //call the parent constructor with super
        this.topSpeed = topSpeed;
        this.acceleration = acceleration;
    }

   goFast(){
          this.currentSpeed = this.topSpeed;
    }

    aTodoGas(): Promise<iSpeed>{
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