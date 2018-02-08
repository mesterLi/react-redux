import axios from 'axios';

import { linkTo } from '../../utils/utils';

var initState = {
    'name':'',
    'type':'',
    'msg':null,
    'linkTo':null,
    'company':'',
    'condition':'',
    'icon':'',
    'text':''
};
export default function userReducer(state = initState,action) {
    switch(action.type){
        case 'RegisterSuccess':
            var { body, msg } =  action.data;
            return Object.assign({},state,{ name:body.name, type:body.type, msg:msg,'linkTo':linkTo(body) });
        break;
        case 'ErrorMsg':
            return Object.assign({},state,{msg:action.data});
        break;
        case 'ClearMsg':
            return Object.assign({},state,{msg:null});
        break;
        case 'LoginSuccess':
            var { msg, body } = action.data;
            return Object.assign({},state,{ name:body.name, type:body.type, msg:msg,'linkTo':linkTo(body) });
        break;
        case 'LoadData':
            var { msg, body } = action.data;
            return Object.assign({},state,body,{ msg:msg,'linkTo':linkTo(body) });
        default:
            return state;
    }
}
