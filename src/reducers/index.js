import { combineReducers } from 'redux';
import Tasks from './taskReducer';
import updateStatus from './updateStatus'
import getEditTaskReducer from './getEditTask';
import filterReducer from './filter';

const myReducer = combineReducers(
    {
        TaskList: Tasks, // mặc định là mãng rỗng []
        editStatus: updateStatus,
        editTask: getEditTaskReducer,
        filter: filterReducer
    }
)
export default myReducer;