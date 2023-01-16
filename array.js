// 8. declare an array . number of elemenets . update or change 4th position element . add or remove elements. check whether specific value exists in array

let numbers = [12, 15, 46, 48, 75, 12, 45];

// number of elements
for (let i = 0; i < numbers.length; i++) {
    // console.log("element of this array", i)

}

// update 4th position element
numbers[4] = 100;
// console.log(numbers);



// add or remove an element of array

numbers.push(400, 458, 3215);
numbers.pop();
// console.log(numbers)

// check unique value
function uniqueNumber(number) {
    let unique = []
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}
var result = uniqueNumber(numbers);
console.log(result);


// // 9. use any for loop to display every elements of an array 

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    console.log('all element of this array', num)
}