import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import {connect} from 'react-redux';
import { actionAddNewTask, actionUpdateTask } from '../actions';


 class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      labelArr: [],
      priority: '', // cao
      memberIDArr: [],
      status: 1, //chưa bắt đầu
      description: ''
    }
  }
  componentWillReceiveProps(nextProps) { // xài khi props bị thay đổi, nextProps là props sau khi thay đổi
    let {editedTask} = nextProps;
    if (editedTask) {
      let { id, name, labelArr, priority, memberIDArr, status, description } = editedTask;
      this.setState({
        id, // => id: id
        name, // => name : name
        labelArr, // => labelArr: labelArr
        priority, // ...
        memberIDArr,
        status,
        description
      })
    }
    if(!nextProps.editStatus){
      this.setState({
        id: '',
        name: '',
        labelArr: [],
        priority: '',
        memberIDArr: [],
        status: 1,
        description: ''
      })
    }
  }

  handleOnChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    if (e.target.name === "priority" || e.target.id === "id") {
      this.setState({
        [e.target.name]: parseInt(e.target.value),
      })

    }
    else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    // this.setState({
    //   [e.target.name]: e.target.value
    //   // => id: e.target.value
    //   // => name: e.target.value
    //   // => ....
    // }, () => {
    //   console.log(this.state)
    // }
    // )

  }

  handleCheckBoxMember = (e) => {
    // console.log(e);
    this.setState({
      memberIDArr: e
    }, () => {
      // console.log(this.state)
    }
    )
  }
  handleCheckBoxLabel = (e) => {
    // console.log(e);
    this.setState({
      labelArr: e
    }, () => {
      // console.log(this.state)
    }
    )
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    if (this.props.editStatus) {
      // this.props.updateTask(this.state); -> cũ
      this.props.onUpdateTask(this.state);
    }
    else {
      // this.props.addTask(this.state); ->cũ
      this.props.onAddNewTask(this.state);
    }
    // console.log('da update')

    // console.log(this.state);
    document.getElementById('btnDong').click();

  }
  render() {
    var { id, name, labelArr, priority, memberIDArr, description } = this.state;
    // => var id = this.state.id
    var {editStatus} = this.props;
    // console.log('this.propss', this.props);
    
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {editStatus ? 'Cập nhật công việc' : 'Thêm công việc'}
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                ×
            </button>
            </div>
            {/* Modal body */}
            <form onSubmit={this.handleOnSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Mã công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    value={id}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskName"
                    value={name}
                    name="name"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description"
                    value={description}
                    name="description"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select name="priority" value={priority} onChange={this.handleOnChange} className="form-control" id="priority">
                    <option value={0}>Chọn thứ tự ưu tiên</option>
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>

                <CheckboxGroup name="memberIDArr" value={memberIDArr} onChange={this.handleCheckBoxMember}>
                  <Checkbox value="user_1" /> Lạc
                  <Checkbox value="user_2" /> Hiếu
                  <Checkbox value="user_3" /> Tài
                </CheckboxGroup>


                <br />
                <br />
                <label>Nhãn:</label>
                <br />
                <CheckboxGroup name="labelArr" value={labelArr} onChange={this.handleCheckBoxLabel}>
                  <Checkbox value="Frontend" />Frontend
                  <Checkbox value="Backend" />Backend
                  <Checkbox value="API" />API
                  <Checkbox value="Issue" />Issue
                </CheckboxGroup>


              </div>
              {/* </form> */}
              {/* Modal footer */}
              {/* <form onSubmit = {this.handleOnSubmit}> */}
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                >
                  Submit
                </button>
                <button
                  className="btn btn-danger"
                  data-dismiss="modal"
                  id="btnDong"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps= (state) =>{
  return{
    editStatus: state.editStatus,
    editedTask: state.editTask
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onAddNewTask: (task) =>{
      dispatch(actionAddNewTask(task))
    },
    onUpdateTask: (task) =>{
      dispatch(actionUpdateTask(task))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ModalComponent);