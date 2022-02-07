// level {1/2/3}
// first one
const red = [1, 3, 4, 6, 7, 8];
red.filter((x)=>x%2 != 0)
// second 
const convert = (value)=> {
    return value.split('').reduce((x,y)=> x+ (/[aeiou]/i.test(y)?y.toUpperCase(): y.toLowerCase()),"")
}
// third
const findMax = [1, 3, 4, 6, 7, 8, 2, 5];
Math.max(...findMax);