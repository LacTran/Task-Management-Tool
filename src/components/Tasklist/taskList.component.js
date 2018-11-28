import React, { Component } from 'react';
import { FilterStringComponent } from './filter-string/filter-string.component';
import  TaskItemComponent  from './task-item/task-item.component';
import {connect} from 'react-redux';
import { actionGetTaskList } from '../../actions';

class TaskListComponent extends Component {



  filterArr = [];

  // sortTaskItem= (type,value,arr) =>{
  //   switch (type){
  //     case 'name':
  //       arr.sort( (a,b) => {
  //         if (a.name >b.name){
  //           return value;
  //         }
  //         else if (a.name < b.name){
  //           return -value;
  //         }
  //         else{
  //           return 0
  //         }
  //       })
  //       break;
  //     default: return arr;
  //   }
  // }

  filterTaskItem = (type, value) => {
    let { TaskList } = this.props;
    switch (type) {
      case 'progress':
        this.filterArr = TaskList.filter((task) => {
          return task.status === value;
        });
        break;
      case 'label':
        this.filterArr = TaskList.filter((task) => {
          for (let label of task.labelArr) {
            if (label === value) {
              return task;
            }
          }
        });
        break;
      // case 'priority'
      default: this.filterArr = TaskList;
    }

  }

  renderTaskItem = () /** default parameter */ => {

    let { filterType, filterValue, sortBy, sortValue } = this.props
    this.filterTaskItem(filterType, filterValue);

    // console.log(this.filterArr);
    //sort sau khi filter xong

    // this.sortTaskItem(sortBy,sortValue,this.filterArr);
    
    var taskItemArr = this.filterArr.map((task, index) => {
      return <TaskItemComponent
        task={task}
        key={index}
        index={index}
        // getEditTask={this.props.getEditTask}
      />
    })
    
    // console.log(taskItemArr)
    return taskItemArr;
  }
  componentDidMount(){
    this.props.onGetDataList();
  }
  render() {
    // console.log(this.props.TaskList)
    // console.log(this.props.TaskList);
    
    // => var TasksData = this.props.TasksData;
    return (
      
      <div className="col-md-9 px-0">
        <FilterStringComponent />
        <div className="px-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Công việc</th>
                <th className="text-center">Nhãn</th>
                <th className="text-center">Độ ưu tiên</th>
                <th className="text-center">Người thực hiện</th>
                <th className="text-center">Xử lý</th>
                <th className="text-center">Tình trạng</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTaskItem()}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
    TaskList : state.TaskList,
    filterType: state.filter.filterType,
    filterValue: state.filter.filterValue
  }

}
const mapDispatchToProps = (dispatch) =>{
  return {
    onGetDataList : () =>{
      dispatch(actionGetTaskList())
    },
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskListComponent);