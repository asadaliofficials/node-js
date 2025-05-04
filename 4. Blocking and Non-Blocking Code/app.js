const { log } = require('console');
const fs = require('fs');

// blocking request code

// console.log('1');
// const data = fs.readFileSync('./hello.txt','utf-8')
// console.log(data);
// console.log('2');


// non-blocking request code

// console.log('1');
// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
// for (let i = 2; i < 100000; i++) {
//   console.log(i);
// }