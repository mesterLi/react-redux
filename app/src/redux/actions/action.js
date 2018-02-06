import axios from 'axios';
const SUCCESS = 'Success';
const ERROR = 'Error';

const Success = (data) => ({
	type:SUCCESS,
	data:data
})
const Error = (msg) => ({
	type:ERROR,
	data:msg
})
const Register = ({name,pwd,repwd,type}) => {
	if(!name||!pwd){
		return Error('账号和密码不能为空')
	}
	if(pwd!==repwd){
		return Error('两次密码不一致')
	}
	return dispatch =>{
		axios.post('/user/register',{name,pwd,type})
			.then((res)=>{
				switch(res.data.code){
					case 0:
						var data = res.data.body;
						dispatch(Success(data))
					break;
					case 1:
						dispatch(Error('用户名重复'))
					break;
					case 2:
						dispatch(Error('网络错误'))
					break;
				}
			})
	}
}
export { Register, Error, Success };
