import axios from 'axios';
const ADD_GUN = "AddGun";
const REMOVE_GUN = "RemoveGun";
const ASYCN_ADD_GUN = "AsycnAddGun";

const LOAD_DATA = "LoadData";

var LoadData = (data) =>({
	type:LOAD_DATA,
	data:data
})
var RemoveData = (data) =>{
	return dispatch =>{
		axios.get('/data/remove?id='+data.id)
			.then((res)=>{
				if(res.data.code == 200){
					dispatch(InitLoad())
				}
			})
	}
}
var InitLoad = () =>{
	return dispatch => {
		axios.get('/data/query')
	      .then(function(res){
	        if(res.data.code==200){
	          dispatch(LoadData(res.data.body))
	        }
	    })
	}
}
var AddData = (data) =>{//异步
	return dispatch=>{
		axios.get('/data/add?user='+data.user+'&age='+data.age)
			.then(function(res){
				console.log(res)
				if(res.data.code == 200){
					dispatch(InitLoad())
				}
			})
	}
}
var fetchData = () => ({
	type:'fetchData'
})
export { LoadData, AddData, InitLoad, RemoveData };
