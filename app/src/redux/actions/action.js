import axios from 'axios';
//actions
const ERROR_MSG = 'ErrorMsg';//错误提示
const ClEAR_MSG = 'ClearMsg';//清空提示消息
const LOAD_DATA = 'LoadData';//加载信息
const SUCCESS_ACTIONS='SuccessAcions';//所有成功action集合
const LOAD_LIST = 'LoadList';
const LOGOUT = 'Logout';//注销
//加载列表信息action
const LoadList =(json) =>{
	const data = json.map(v=>{
		delete v.pwd
		return v
	})
	return {
		type:LOAD_LIST,
		data:data
	}
}
//成功
const SuccessAcions = (json) => {
	const { pwd,...data } =json;
	return {
		type:SUCCESS_ACTIONS,
		data:data
	}
}
//错误信息提示
const ErrorMsg = (msg) => ({
	type:ERROR_MSG,
	data:msg
})
//清空信息
const ClearMsg = () => ({
	type:ClEAR_MSG
})
const Logout = () =>{
	return {
		type:LOGOUT
	}
}
//更新信息
const UpdateInfo = (data) =>{
	return dispatch => {
		axios.post('/user/updateinfo',data)
		.then((res)=>{
			if(res.data.code!=0){
				dispatch(ErrorMsg(res.data.msg))
			}else{
				dispatch(SuccessAcions(res.data))
			}

		})
	}
}
//注册
const Register = ({name,pwd,repwd,type}) => {
	if(!name||!pwd){
		return ErrorMsg('账号和密码不能为空')
	}
	if(pwd!==repwd){
		return ErrorMsg('两次密码不一致')
	}
	return dispatch =>{
		axios.post('/user/register',{name,pwd,type})
			.then((res)=>{
				switch(res.data.code){
					case 0:
						dispatch(SuccessAcions(res.data))
					break;
					case 1:
						dispatch(ErrorMsg('用户名重复'))
					break;
					case 2:
						dispatch(ErrorMsg('网络错误'))
					break;
				}
			})
	}
}
//登录
const Login = ({name,pwd}) => {
	if(!name||!pwd){
		return ErrorMsg('账号和用户名不能为空')
	}
	return dispatch =>{
		axios.post('/user/login',{name,pwd})
		.then((res)=>{
			switch(res.data.code){
				case 0:
					dispatch(SuccessAcions(res.data))
				break;
				case 1:
					dispatch(ErrorMsg(res.data.msg))
				break;
				case 2:
					dispatch(ErrorMsg(res.data.msg))
				break;
			}
		})
	}
}
//加载列表
const GetList = (json) =>{
	return dispatch => {
		axios.get('/user/list?type='+json)
			.then(res=>{
				if(res.status==200&&res.data.code==0){
					dispatch(LoadList(res.data.body))
				}else{
					dispatch(ErrorMsg(res.data.msg))
				}
			})
	}
}
export { 
	Register,  
	ClearMsg, 
	Login,
	UpdateInfo,
	SuccessAcions,
	GetList,
	Logout
 };
