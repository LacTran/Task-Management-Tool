import * as Type from '../constants/actionType';
let initialState = {
    id: '',
    name: '',
    labelArr: [],
    priority: '',
    memberIDArr: [],
    status: 1,
    description: ''
}

export const getEditTaskReducer = (state = initialState, action) =>{
    switch(action.type){
        case Type.GET_EDIT_TASK:
            state = {...action.editTask};
            console.log(state);
            return {...state}
        default: return {...state};
    }

}

export default getEditTaskReducer;