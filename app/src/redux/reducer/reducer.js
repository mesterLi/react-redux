import axios from 'axios';

import { linkTo } from '../../utils/utils';

var initState = {
    'name':'',
    'type':'',
    'msg':null,
    'linkTo':null
};
export default function userReducer(state = initState,action) {
    switch(action.type){
        case 'RegisterSuccess':
            var { name, type, msg } =  action.data;
            return Object.assign({},state,{ name, type, msg,'linkTo':linkTo(type) });
        break;
        case 'RegisterError':
            return Object.assign({},state,{msg:action.data});
        break;
        case 'ClearMsg':
            return Object.assign({},state,{msg:null});
        break;
        case 'LoginSuccess':
            var { msg, body } = action.data;
            return Object.assign({},state,{ name:body.name, type:body.type, msg:msg,'linkTo':linkTo(body.type) });
        break;
        case 'LoginError':
            return Object.assign({},state,{msg:action.data});
        break;
        default:
            return state;
    }
}
