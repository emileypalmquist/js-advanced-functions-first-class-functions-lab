const returnFirstTwoDrivers = (array) => {
  let newArray = array.slice(0, 2)
  return newArray.map(e => {return e})
}

const returnLastTwoDrivers = (array) => {
  let newArray = array.slice(-2)
  return newArray.map(e => {return e})
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function fareMultiplier(fare) {
    return fare * integer
  }
}

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare) 
}

function selectDifferentDrivers(array, func) {
  return func(array)
} 