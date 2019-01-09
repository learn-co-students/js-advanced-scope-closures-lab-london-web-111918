function produceDrivingRange(blockRange) {
  function rangeCal(end, start) {
    const blockDistForTrip = parseInt(start) - parseInt(end);
    const range = parseInt(blockRange);
    const blockdiff = Math.abs(blockDistForTrip - blockRange);

    if (blockDistForTrip < range) {
      return `within range by ${blockdiff}`;
    } else {
      return `${blockdiff} blocks out of range`;
    };
  };
  return rangeCal;
}
//
// const test = produceDrivingRange(8)
// test(10,20)

function produceTipCalculator(percent) {
   return function tipCal(tip) {
     return tip * percent
  }
}

function createDriver() {
  let ItemId = 0

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ItemId;
    }
  }
}
