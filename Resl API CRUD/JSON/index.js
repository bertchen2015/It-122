const cust_addr = require('./customer.json')
const fs = require('fs');
const {
	stringify
} = require('querystring');

function readJSON(filePath, cb) {
	fs.readFile(filePath, 'utf-8', (err, fileData) => {
		if (err) {
			return cb && cb(err)
		}
		try {
			const obj = JSON.parse(fileData)
			return cb && cb(null, obj)
		} catch (err) {
			return cb && cb(err)
		}
	});
}
const newObject = {
	name: 'Newbie Corp',
	order_count: 0,
	address: 'Po Box City'
}

function readJSON(filePath, cb) {
	fs.readFile(filePath, 'utf-8', (err, fileData) => {
		if (err) {
			return cb && cb(err)
		}
		try {
			const obj = JSON.parse(fileData)
			return cb && cb(null, obj)
		} catch (err) {
			return cb && cb(err)
		}
	});
}
readJSON('./customer.json', (err, data) => {
	if (err) {
		console.log(err)
	} else {
		data.order_count += 1
		fs.writeFile('./customer.json', JSON.stringify(data, null, 2), err => {
			if (err) {
				console.log(err)
			}
		})
	}
})