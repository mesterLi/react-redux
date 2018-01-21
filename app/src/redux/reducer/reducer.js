

var initialState = {
    ToDoList:[]
}
export default function reducer(state = initialState,action) {
    var state = state;
    switch(action.type){
        case 'Add':
            state.ToDoList.push(action.data)
            return state;
        break;
        case 'Remove':
            state.num++;
            return Object.assign({},state);
        break;
        case 'Complate':
            state.num++;
            return Object.assign({},state);
        break;
        default:
            return state;
    }
}
