import * as Type from '../constants/actionType';
let initialState = {
    filterType: '',
    filterValue: ''
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.FILTER_BY_PROGRESS:
            state = { ...state, filterType: action.filterType, filterValue: action.filterValue };
            return { ...state };
        default: return { ...state };
    }
}
export default filterReducer;