import axios from 'axios';
//actions
const REGISTER_SUCCESS = 'RegisterSuccess';//注册成功
const ERROR_MSG = 'ErrorMsg';//错误提示
const LOGIN_SUCCESS = 'LoginSuccess';//登陆成功
const ClEAR_MSG = 'ClearMsg';//清空提示消息
const LOAD_DATA = 'LoadData';//加载信息

const RegisterSuccess = (json) => ({
	type:REGISTER_SUCCESS,
	data:json
})
const LoginSuccess = (json) => ({
	type:LOGIN_SUCCESS,
	data:json
})
const ErrorMsg = (msg) => ({
	type:ERROR_MSG,
	data:msg
})
const ClearMsg = () => ({
	type:ClEAR_MSG
})
const LoadData = (json) => ({
	type:LOAD_DATA,
	data:json
})
const UpdateInfo = ({condition,icon,company,text}) =>{
	if(!condition||!icon||!company){
		return ErrorMsg('请完善信息')
	}
	return dispatch => {
		axios.post('/user/updateinfo',{condition,icon,company,text})
		.then((res)=>{
			if(res.data.code!=0){
				dispatch(ErrorMsg(res.data.msg))
			}else{
				dispatch(LoadData(res.data))
			}

		})
	}
}
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
						dispatch(RegisterSuccess(res.data))
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
const Login = ({name,pwd}) => {
	if(!name||!pwd){
		return ErrorMsg('账号和用户名不能为空')
	}
	return dispatch =>{
		axios.post('/user/login',{name,pwd})
		.then((res)=>{
			switch(res.data.code){
				case 0:
					dispatch(LoginSuccess(res.data))
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
export { 
	Register,  
	ClearMsg, 
	Login,
	LoadData,
	UpdateInfo
 };
