import axios from 'axios';
//actions
const REGISTER_SUCCESS = 'RegisterSuccess';//注册成功
const REGISTER_ERROR = 'RegisterError';//注册失败
const LOGIN_SUCCESS = 'LoginSuccess';//登陆成功
const LOGIN_ERROR = 'LoginError';//登陆失败
const ClEAR_MSG = 'ClearMsg';//清空提示消息

const RegisterSuccess = (json) => ({
	type:REGISTER_SUCCESS,
	data:json
})
const RegisterError = (msg) => ({
	type:REGISTER_ERROR,
	data:msg
})
const LoginSuccess = (json) => ({
	type:LOGIN_SUCCESS,
	data:json
})
const LoginError = (msg) => ({
	type:LOGIN_ERROR,
	data:msg
})
const ClearMsg = () => ({
	type:ClEAR_MSG
})
const Register = ({name,pwd,repwd,type}) => {
	if(!name||!pwd){
		return RegisterError('账号和密码不能为空')
	}
	if(pwd!==repwd){
		return RegisterError('两次密码不一致')
	}
	return dispatch =>{
		axios.post('/user/register',{name,pwd,type})
			.then((res)=>{
				switch(res.data.code){
					case 0:
						dispatch(RegisterSuccess(res.data))
					break;
					case 1:
						dispatch(RegisterError('用户名重复'))
					break;
					case 2:
						dispatch(RegisterError('网络错误'))
					break;
				}
			})
	}
}
const Login = ({name,pwd}) => {
	if(!name||!pwd){
		return LoginError('账号和用户名不能为空')
	}
	return dispatch =>{
		axios.post('/user/login',{name,pwd})
		.then((res)=>{
			switch(res.data.code){
				case 0:
					dispatch(LoginSuccess(res.data))
				break;
				case 1:
					dispatch(LoginError(res.data.msg))
				break;
				case 2:
					dispatch(LoginError(res.data.msg))
				break;
			}
		})
	}
}
export { 
	Register,  
	ClearMsg, 
	Login
 };
