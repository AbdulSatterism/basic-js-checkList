// 10. you have an array of numbers. display only the number bigger than 80
let array = [10, 40, 60, 80, 75, 89, 75, 84, 96, 87, 96, 4];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < 80) {
        continue;
    }
    console.log(element)
}