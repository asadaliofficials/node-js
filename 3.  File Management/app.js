console.log('hey');
const fs = require('fs');



// Create File using fs module in sync way
// fs.writeFileSync('./hello.txt', 'Hello World!');

// Create File using fs module in async way
// fs.writeFile('./hello.txt', 'Hello World!', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });



// Read File using fs module in sync way
// const data = fs.readFileSync('./hello.txt','utf-8');
// console.log(data.toString());


// Read File using fs module in async way
// fs.readFile('./hello.txt','utf-8',(error,data)=>{
//        if(!error){
//         console.log(data.toString());
//        }
// })


// delete file using js module in sync way
// fs.unlinkSync('./hello.txt');
// console.log('file deleted');

// delete file using js module in async way
// fs.unlink('./hello.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted!');
// });






// coping file using fs module in sync way
// fs.copyFileSync('./hello.txt', './hello2.txt');
// console.log('file copied');

// coping file using fs module in async way
// fs.copyFile('./hello.txt', './hello2.txt', (err) => {
//   if (err) throw err;
//   console.log('File copied!');
// });




// moving file using fs module in sync way
// fs.renameSync('./hello.txt', './public/hello.txt');
// console.log('file moved');

// moving file using fs module in async way
// fs.rename('./hello.txt', './public/hello.txt', (err) => {
//   if (err) throw err;
//   console.log('File moved!');
// });


// append data in file using fs module in sync way
// fs.appendFileSync('./public/hello.txt', ' how are u?\n');

// append data in file using fs module in async way
// fs.appendFile('./public/hello.txt', ' how are u?\n', (err) => {
//   if (err) throw err;
//   console.log('data added!');
// });








// to make a folder using fs module in sync way
// fs.mkdirSync('./public/assets/css', {recursive: true})


// to make a folder using fs module in async way
// fs.mkdir('./public/assets/css', {recursive: true}, (err) => {
//   if (err) throw err;
//   console.log('Folder created!'); 
// });

// to rename a folder using fs module in sync way
// fs.renameSync('./public/assets/css', './public/assets/sass')

// to rename a folder using fs module in async way
// fs.rename('./public/assets/css', './public/assets/sass', (err) => {
//   if (err) throw err;
//   console.log('Folder renamed!'); 
// });


// to delete a folder using fs module in sync way
// fs.rmSync('./public/assets' ,{recursive: true})

// to delete a folder using fs module in async way
// fs.rm('./public/assets' ,{recursive: true}, (err) => {
//   if (err) throw err;
//   console.log('Folder deleted!'); 
// });


