import axios from 'axios';

export default function reducer(state = [],action) {
    switch(action.type){
        case 'LoadData':
            return action.data;
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
