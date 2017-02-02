import { RaceCar} from "./raceCar"
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
