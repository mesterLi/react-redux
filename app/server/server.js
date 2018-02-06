var mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParse = require('body-parser');

var user = require('./user');
const app = express();
app.use(cookieParser());
app.use(bodyParse.json());
app.use('/user',user);
// 链接mongo 并且使用mester这个集合
// const DB_URL = 'mongodb://localhost:27017/mester';
// var DATA = {
// 	"code":200,
// 	"message":"添加成功",
// 	"body":{}
// }
// //链接数据库
// mongoose.connect(DB_URL);
// mongoose.connection.on("connected",function(res,rep){
// 	console.log("connect Success");
// })
//建一个first的表
// const first = mongoose.model("first",new mongoose.Schema({
// 	//定义字段
// 	user:{type:String,require:true},
// 	age:{type:Number,require:true},
// 	id:{type:Number,require:true}
// }))

// app.get('/',function(req,res){
// 	res.send('<h1>hello word</h1>')
// })
// app.get('/data/query',function(req,res){
// 	//查询全部，查询一个findOne
// 	first.find(function(err,json){
// 		if(!err){
// 			DATA.message = "";
// 			DATA.body = json;
// 			res.json(DATA)
// 		}
// 	})
// })
// app.get('/data/queryOne',function(req,res){
// 	//查询全部，查询一个findOne
// 	first.findOne(req.query,function(err,json){
// 		if(!err){
// 			DATA.message = "查询成功";
// 			DATA.body = json;
// 			res.json(DATA)
// 		}
// 	})
// })
// app.get('/data/add',function(req,res){
// 	console.log(req.query)
// 	if(req.query.user!=""&&req.query.age!=""){
// 		//增加
// 		req.query.id = new Date().getTime();
// 		first.create(req.query,function(err){
// 			if(!err){
// 				DATA.message = "添加成功";
// 				DATA.body = "";
// 				res.json(DATA)
// 			}else{
// 				console.log(err)
// 			}
// 		})
// 	}else{
// 		DATA.code=200;
// 		DATA.message="参数不能为空";
// 		res.json(DATA)
// 	}

// })
// app.get('/data/remove',function(req,res){
// 	//删除全部，删除特定的数据传条件
// 	first.remove(function(err,json){
// 		if(!err){
// 			DATA.message="删除成功";
// 			DATA.body="";
// 			res.json(DATA)
// 		}
// 	})
// })
// app.get('/data/update',function(req,res){
// 	//修改
// 	console.log(req.query)
// 	first.update({id:req.query.id},{'$set':req.query},function(err,json){
// 		if(!err){
// 			DATA.message = "修改成功";
// 			DATA.body = "";
// 			res.json(DATA)
// 		}
// 	})
// })
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})
