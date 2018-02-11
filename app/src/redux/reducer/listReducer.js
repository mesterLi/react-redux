
const initState = null;

function listReducer(state=initState,action){
	switch(action.type){
		case 'LoadList' :
			return Object.assign([],state,action.data)
		break;
		default:
			return state;
	}
}
export default listReducer;

