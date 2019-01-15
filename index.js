function produceDrivingRange(range) {
  return function (start, end) {
    let startInt = parseInt(start);
    let endInt = parseInt(end);
    let distanceToTravel = endInt - startInt;
    let difference = range - distanceToTravel;
    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      difference = 0 - difference
      return `${difference} blocks out of range`
    };
  };
};

function produceTipCalculator(percentage) {
  return function (fare) {
    return fare * percentage;
  };
};

function createDriver() {
  let driverId = 0
  return class {
    constructor( name ) {
      this.id = ++driverId
      this.name = name
    }
  }
}
