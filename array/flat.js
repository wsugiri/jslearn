const myArr = [[1, 2], [3, 4], [[5, [[[6]]]]], [5, 6]];

console.log(myArr.flat(Infinity));

const flatten = (arr) =>
    arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);

console.log(flatten(myArr));

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 3, 7, 2, 3, 4];
console.log(arr1.concat(arr2));


console.log(Array.from("Hello World"));
const arr3 = [];
const arrHello = Array.from("Hello Wor  l d".replace(/ /g, ''));
for (const key in arrHello) {
    const char = arrHello[key];
    if (arr3.indexOf(char) < 0) {
        arr3.push(char);
    }
}
console.log(arr3.join(''));
console.log(arr2.pop());
console.log(arr2.pop());
console.log(arr2.shift());
console.log(arr2);