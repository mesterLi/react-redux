const ADD_GUN = "AddGun";
const REMOVE_GUN = "RemoveGun";
const ASYCN_ADD_GUN = "AsycnAddGun";

var AddGun = () => ({
    type:ADD_GUN
})
var RemoveGun = () => ({
    type:REMOVE_GUN
})
var AsycnAddGun = () =>{//异步
	return dispatch=>{
		setTimeout(()=>{
			dispatch(AddGun())
		},2000)
	}
}
var fetchData = () => ({
	type:'fetchData'
})
// function actionCreater(type,data) {
// 	retrun {
// 		type:type,
// 		data:data||''
// 	}
// }
export { AddGun, RemoveGun, AsycnAddGun, fetchData };
