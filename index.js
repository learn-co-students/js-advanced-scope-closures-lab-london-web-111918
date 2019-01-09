function produceDrivingRange(blockRange) {
  return function(a, b) {
    let difference = parseInt(b) - parseInt(a)
    if (blockRange > difference) {
      return `within range by ${blockRange - difference}`
    } else {
      return `${-(blockRange - difference)} blocks out of range`
    }

  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {

    constructor(name) {
      this.name = name
      this.id = driverId++
    }

  }
  const Item = createDriver()
}
