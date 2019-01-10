function produceDrivingRange(blockRange){
  return function(a, b){
    let range = parseInt(b) - parseInt(a)
    if (blockRange > range){
      return `within range by ${blockRange - range}`
    }
     else {
       return `${range - blockRange} blocks out of range`
     }
  }
}

function produceTipCalculator(tip){
  return function(totalMeal){
    return totalMeal * tip
  }
}

function createDriver(){
  let driverId = 0;
    return class Driver{
      constructor(name){
        this.name = name;
        this.id = ++driverId;
      }
    }
    const Driver = createDriver()
}
