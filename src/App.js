import React, { Component } from 'react';
import './App.css';
import { ControlComponent } from './components/control/control.component';
import  TaskListComponent  from './components/Tasklist/taskList.component';
import ModalComponent from './modal/modal.component';
// import { TasksData } from './data/taskData';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // taskList: TasksData
      // taskList: [],
      // editStatus: false,
      // editedTask: null,
      filterType: '',
      filterValue: '',
      sortBy: 'name',
      sortValue: 1
    }
  }

  getSort = (type,value) => {
    // console.log(type);
    // console.log(value);
    this.setState({
      sortBy: type,
      sortValue: value
    })
  }

  getFilter= (type,value) =>{
    // console.log(type);
    // console.log(value);
    this.setState({
      filterType: type,
      filterValue: value
    })
  }



  // componentWillMount() {
  //   var taskData = JSON.parse(localStorage.getItem('TaskData'));
  //   if (taskData) {
  //     this.setState({
  //       taskList: taskData
  //     })
  //   }
  //   else {
  //     this.setState({
  //       taskList: TasksData
  //     })
  //   }
  // }

  //Thay đổi tiêu đề modal
  // setEditStatus = (status) => {
  //   this.setState({
  //     editStatus: status
  //   })
  // }

  // getEditTask = (task) => {
  //   console.log(task);
  //   this.setState({
  //     editedTask: task
  //   })
  // }

  // addTask = (newTask) => {
  //   // TasksData = [...TasksData,newTask];
  //   // console.log(TasksData);
  //   this.setState({
  //     taskList: [...this.state.taskList, newTask]
  //   }, () => {
  //     localStorage.setItem('TaskData', JSON.stringify(this.state.taskList))
  //   }
  //   )

  // }

  // updateTask = (newTask) => {
  //   var index = this.findIndex(this.state.taskList, newTask.id);
  //   if (index !== -1) {
  //     let taskListClone = [...this.state.taskList];
  //     taskListClone[index] = {...newTask};
  //     this.setState({
  //       taskList: taskListClone
  //     }, () => {
  //       localStorage.setItem('TaskData', JSON.stringify(this.state.taskList))
  //     })
  //   }
  // }

  // findIndex = (arr, id) => {
  //   for (var i in arr) {
  //     if (arr[i].id === id) {
  //       return parseInt(i);
  //     }
  //   }
  // }

  render() {

    let { filterValue, filterType, sortBy, sortValue } = this.state;

    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <ControlComponent getFilter={this.getFilter} getSort={this.getSort} />
            {/* DISPLAY */}
            <TaskListComponent sortBy={sortBy} sortValue ={sortValue} filterType={filterType} filterValue={filterValue} 
              /**TasksData={this.state.taskList} */ />
          </div>
        </div>
        {/* The Modal */}
        <ModalComponent updateTask ={this.updateTask} />
      </div>

    );
  }
}

export default App;
