var mongoose = require('mongoose')

var DB_URL = 'http://localhost:27017'

const model = {
	"user":{
		"userid":{ "type":String,"require":true },
		"name":{ "type":String,"require":true },
		"pwd":{ "type":String,"require":true }
	}
}
for(var m in model){
	mongoose.model(m,new mongoose.Schema(model[m]))
}
module.exports = {
	getModel:function(name) {
		return mongoose.model(name)
	}
}
