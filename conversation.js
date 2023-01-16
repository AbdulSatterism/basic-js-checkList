// 1. conversation
// function name(feetToInch) use function

function feetToInch(feet) {
    let takeFeet = 12 * feet;
    return takeFeet;
}
const inputFeet = 2;
const feetResult = feetToInch(inputFeet);
console.log(feetResult)

// 2. conversion
// function name (centimeterToMeter)
// we know 1 f = 30.48 cm

function centimeterToMeter(centimeter) {
    let takeCentimeter = centimeter / 100;
    return takeCentimeter;
}
const centimeter = 500;
const meterResult = centimeterToMeter(centimeter);
console.log(meterResult)

