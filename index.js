 function produceDrivingRange(range) {
     return function(distance1, distance2) {
         let difference = (parseInt(distance2, 10) - parseInt(distance1, 10));
         if (difference >= range){
             return `${Math.abs(difference-range)} blocks out of range`;
         }  else {
             return `within range by ${Math.abs(difference-range)}`
         }
     };
 } 
 

function produceTipCalculator(tip) {
    return function(fare){
        return fare * tip;
    }
}



function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++ driverId;
        }
    };
}