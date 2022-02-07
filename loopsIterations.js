// level {1/2/3}
var num = prompt("please enter the number",);
var i;
var fib = [];
fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= num; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib.reduce((y,a)=> y + a,0));