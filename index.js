// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
const isArray = (val) => {
    return Object.prototype.toString.call(val) === "[object Array]"
}
console.log(`a is ${isArray(a) ? '\b' : 'not'} of type array`)
console.log(`b is ${isArray(b) ? '\b' : 'not'} of type array`)


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// output [2,4,6,8,10]
console.log(a.map(item => {
    return item * 2
}))

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//case 1 output: 'Red Green White Black'
console.log(colors.join(" "))
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join("+"))
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(","))


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//output: [10,8,5,4,1]
console.log(a.sort((a, b) => {
    return b - a
}))

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//should output: 'a'
let data = {}
let target = {
    max: 0,
    words: []
}
a.forEach(item => {
    if (item in data) {
        data[item]++
    } else {
        data[item] = 1
    }
    if (target.max < data[item]) {
        target.max = data[item]
        target.words = [item]
    } else if (target.max === data[item]) {
        // 处理次数相同的情况
        target.words.push(item)
    }
})
console.log(target.words.join(","))