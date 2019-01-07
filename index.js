function produceDrivingRange(block) {
  return function(blockStart, blockEnd) {
    totalDist = Math.abs(parseInt(blockEnd) - parseInt(blockStart))
      if ( totalDist > block) {
        return `${totalDist - block} blocks out of range` }
      else if (totalDist < block) {
        return `within range by ${block - totalDist}`}
  };
};

function produceTipCalculator(percentage){
  return function(cash){
    return tip = cash * percentage
  };
};

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    };
  };
};
