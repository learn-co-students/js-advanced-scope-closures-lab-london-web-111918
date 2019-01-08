function produceDrivingRange(blockRange) {
  return function (from, to) {
    const start = parseInt(from)
    const end = parseInt(to)
    const travel = end - start
    if (travel > blockRange) {
      return `${travel - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - travel}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (total) {
    return total * percentage
  }
}

function createDriver() {
  let id = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++id
    }
  }
}
