function produceDrivingRange(blockRange) {
  return function(from, to) {
    const begin = parseInt(from)
    const end = parseInt(to)
    const distance = end - begin
    if (distance <= blockRange) {
      return `within range by ${Math.abs(distance - blockRange)}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(cost) {
  return tip = cost * percentage
  }
}

function createDriver() {
  let DriverId = 0;
    return class {
      constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
