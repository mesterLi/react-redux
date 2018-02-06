var mongoose = require('mongoose')

var DB_URL = 'mongodb://localhost:27017/job-chart'
mongoose.connect(DB_URL)
const models = {
	user:{
		"userid":{ "type":String,"require":true },
		"name":{ "type":String,"require":true },
		"pwd":{ "type":String,"require":true },
		"type":{ "type":String,"require":true }
	}
}
for(var m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
	getModel:function(name) {
		return mongoose.model(name)
	}
}
