const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('error! error!');
		return;
	} else {
		console.log('Async', data.toString());
		return;
	}
});

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

// Append
// fs.appendFile('./hello.txt', ' This is awesome!', err => {
// 	if (err) {
// 		console.log('error!!!');
// 		return;
// 	}
// });

// Write
// fs.writeFile('bye.txt', 'Sad to see you go :(', err => {
// 	if (err) {
// 		console.log('ERRROOORRR!');
// 		return;
// 	}
// });

// Delete
// fs.unlink('./bye.txt', err => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// });
