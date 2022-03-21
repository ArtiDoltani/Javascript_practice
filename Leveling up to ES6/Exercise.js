// Quiz 4
// const MAX = 10;
// let amount = 0;
// while (amount++ < MAX) {
//   let sum = amount;
// }
// console.log(sum);

//quiz 5

const MAX = 5;
 
for (var i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}
 
for (let i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}


// Quiz parameter handling
// function add (a = 0, b = 10) {
//   return a + b;
// }
// const sum = add(10);
// console.log(sum);
// Q2
function User(email, flags = { isActive: false }, numbers = [7, 1]) {
  this.email = email;
  this.flags = flags;
  this.numbers = numbers;
}
const user = new User('testing@gmail.com');
console.log(user);

// Q3
// function sum(...numbers) {
//   return numbers.reduce((acc, number) => acc + number);
// }

// const answer = sum(1, 5, 20, 10);

// console.log(answer);

//Q 4
function multiplyBy2(base, ...numbers) {
  return numbers.map(number => number * 2 + base)
}

const answer = multiplyBy2(100, 1, 5, 20, 10);

console.log(answer);

//Q 5
const names = [
  'bob', 
  ...[
      'donald'
  ],
  'suzy', 
  'lacy',
  ...[
      'richard', 
      'alex'
  ]
 ]
 console.log(names);
 
// Quiz 5
function underscore (strings, ...values) {
    return strings[0].replace(/\s/g, '_');
}
 
const message = underscore`there      is no cow level`
 
console.log(message);


