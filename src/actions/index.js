import * as Type from '../constants/actionType';
export const actionGetTaskList = () => {
    return {
            type: Type.GET_TASK_LIST   
    }
}
export const actionDeleteTask = (id) =>{
    return{
        type: Type.DELETE_TASK,
        id: id
    }
}
export const actionOpenModal = (status) => {
    return{
        type: Type.OPEN_MODAL,
        status
    }
}
export const actionAddNewTask = (task) =>{ 
    return{
        type: Type.ADD_NEW_TASK,
        newTask: task
    }

}

export const actionGetEditTask = (editTask) =>{
    return{
        type: Type.GET_EDIT_TASK,
        editTask
    }
}
export const actionUpdateTask = (task) =>{
    return{
        type: Type.UPDATE_TASK,
        task
    }
}
export const actionFilterByProgress = (filterType,filterValue) =>{
    return{
        type: Type.FILTER_BY_PROGRESS,
        filterType,
        filterValue
    }
}