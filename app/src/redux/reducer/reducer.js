import axios from 'axios';
var initState = {
    'name':'',
    'pwd':'',
    'type':'',
    'msg':''
};
export default function userReducer(state = initState,action) {
    switch(action.type){
        case 'Success':
            return Object.assign({},state,action.data);
        break;
        case 'Error':
            return Object.assign({},state,{msg:action.data});
        break;
        case 'fetchData':
            return Object.assign({},state);
        break;
        default:
            return state;
    }
}
