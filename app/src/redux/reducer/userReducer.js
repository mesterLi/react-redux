import axios from 'axios';

import { linkTo } from '../../utils/utils';

var initState = {
    'name':'',
    'type':'',
    'msg':null,
    'linkTo':null,
    'company':'',
    'condition':'',
    'icon':null,
    'text':''
};
export default function userReducer(state = initState,action) {
    switch(action.type){
        case 'SuccessAcions':
            var { body, msg } =  action.data;
            return Object.assign({},state,{'linkTo':linkTo(body),msg:msg},body)
        break;
        case 'ErrorMsg':
            return Object.assign({},state,{msg:action.data});
        break;
        case 'ClearMsg':
            return Object.assign({},state,{msg:null});
        break;
        default:
            return state;
    }
}
