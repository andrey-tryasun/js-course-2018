function returnSquare(a) {
    return a * a;
}

function returnArray(max, step) {
    const arr = [];
    for (let i = 0; i <= max; i += step) {
        arr[i].push(i);
    }
}

function returnSquareArray(arr) {
    arr = arr.map(returnSquare(a));
    return arr;
}

function returnSum(arr) {
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer));
}

console.log(returnSquare(5));
console.log(returnSquare(15));
console.log(returnSquare(53));
console.log(returnArray(50, 5));
console.log(returnArray(32, 4));
console.log(returnSquareArray(returnArray(32, 4)));
console.log(Sum(returnSquareArray(returnArray(32, 4))));
