var initialState = {
    num:0
}
export default function reducer(state = initialState,action) {
    var state = state;
    switch(action.type){
        case 'action1':
            state.num++;
            return Object.assign({},state);
        break;
        default:
            return state;
    }
}