// function produceDrivingRange(blocks1){
//   return function(blocks2){
//       let noOfBlocks = parseInt(blocks1) - parseInt(blocks2)
//       if (noOfBlocks > blocks1){
//         return `within range by ${noOfBlocks}`
//       }
//       else {
//         return `${noOfBlocks*1} blocks out of range`
//     }
//   }
// }
// produceDrivingRange(8);

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

function produceTipCalculator(tip){
  return function(fare){
      return fare * tip
  }
}


function createDriver(){
  let driverId = 0;
    return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
