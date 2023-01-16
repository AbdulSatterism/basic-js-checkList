// 5. will stop the loop if the array has nay negative number and returns all the positive number before the negative number
// function name onlyPositive 

const numbers = [12, 45, 13, 58, -45, 78, 96, 45, -1, 64, 68, 45, 87, 2, 54];

function onlyPositive(number) {
    let positiveNumber = [];
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        if (num < 0) {
            break;
        }
        else {
            positiveNumber.push(num);

        }

    }
    return positiveNumber;
}
const positive = onlyPositive(numbers)
console.log(positive)
