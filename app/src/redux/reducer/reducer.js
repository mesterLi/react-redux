import axios from 'axios';

export default function reducer(state = 10,action) {
    switch(action.type){
        case 'AddGun':
            return state+1;
        break;
        case 'RemoveGun':
            return state-1;
        break;
        case 'fetchData':
            return Object.assign({},state);
        break;
        default:
            return state;
    }
}
