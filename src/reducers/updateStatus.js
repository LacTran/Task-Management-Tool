let initialState = false;

  const updateStatus = (state = initialState, action) =>{
    switch(action.type){
        case 'OPEN_MODAL':
            state = action.status;
            return state;
        default: return state;
    }
}

export default updateStatus;