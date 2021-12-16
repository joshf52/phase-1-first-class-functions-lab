// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) { 
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = i => {
    return function(fare) {
        return fare * i;
    }
}
const fareDoubler = function(fare) {
    return fare *2;
}

const fareTripler = function(fare) {
    return fare *3;
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}