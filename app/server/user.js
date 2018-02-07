var express = require('express')
var Router = express.Router()
var utility = require('utility');

var model = require('./model')
const User = model.getModel('user')

Router.get('/info',function(req,res){
	console.log(req.cookies)
	if(!req.cookies.userid){
		return res.json({code:1,msg:'未登录'})
	}
	User.findOne({_id:req.cookies.userid},function(err,json){
		if(err){
			return res.json({code:2,msg:'网络错误'})
		}
		return res.json({code:0,msg:'',body:json})
	})
})
Router.post('/register',function(req,res){
	const { name, pwd, type } = req.body;
	User.findOne({name},function(err,json){
		if(json){
			res.json({code:1,msg:'用户名重复'})
			return;
		}
		var UserModel = new User({name:name,pwd:getMd5(pwd),type:type});
		UserModel.save(function(err,json){
			if(err){
				return res.json({code:2,msg:'网络错误'});
			}
			var { _id, type, name } = json;
			res.cookie('userid',_id);
			res.json({code:0,msg:'注册成功',type,name});
		})
	})
})
Router.get('/query',function(req,res){
	User.find(function(err,json){
		res.json(json)
	})
})
Router.post('/login',function(req,res){
	var { name, pwd } = req.body;
	User.findOne({ name:name, pwd:getMd5(pwd) },function(err,json){
		if(err){
			return res.json({code:2,msg:'网络错误'})
		}
		if(!json){
			return res.json({code:0,msg:'账号或密码错误',body:json})
		}
		res.cookie('userid',json._id);
		return res.json({code:0,msg:'登陆成功',body:json})
	})
})
//删除数据
Router.get('/remove',function(req,res){
	User.remove(function(err,json){
		res.json(json)
	})
})
//密码MD5加密
function getMd5(pwd){
	const string = 'mester@!#$%2018';
	return utility.md5(utility.md5(pwd)+string);
}
module.exports = Router;