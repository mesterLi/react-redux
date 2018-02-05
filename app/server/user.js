var express = require('express')
var Router = express.Router()
var model = require('./model')
const User = model.getModel('user')

Router.post('/info',function(req,res){
	console.log(req.query)
})
Router.post('/register',function(req,res){
	const {name, pwd } = req.body;
	User.findOne(name,function(err,json){
		if(!err){
			return res.json({code:1,msg:'用户名重复'})
		}
		User.create({name:name,pwd:pwd},function(err,json){
			if(err){
				return res.json({code:2,msg:'注册失败'})
			}
			return res.json({code:0,msg:'注册成功'})
		})
	})
})
Router.get('/query',function(req,res){
	User.find(function(err,json){
		res.json(json)
	})
})
Router.post('/login',function(req,res){
	console.log(req.query)
})
module.exports = Router;