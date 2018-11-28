import * as Type from '../constants/actionType';
import { TasksData } from '../data/taskData';
var taskData = JSON.parse(localStorage.getItem('TaskData'));

let initialState = taskData ? taskData : TasksData;

let findIndex = (arr, id) => {
    for (var i in arr) {
      if (arr[i].id === id) {
        return parseInt(i);
      }
    }
  }


let taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TASK_LIST:
            return [...state];
        case Type.DELETE_TASK:
            for (let i in state) {
                if (state[i].id === action.id) {
                    state.splice(i, 1);
                }
            }
            localStorage.setItem('TasksData',JSON.stringify(state));
            return [...state];
        case Type.ADD_NEW_TASK:
            state = [...state, action.newTask];
            return [...state];
        default: return [...state];
        case Type.UPDATE_TASK:
            let index = findIndex(state, action.task.id);
            if (index !== -1){
                state[index] = {...action.task};
                return [...state];
            }
    }
}
export default taskReducer;