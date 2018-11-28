import React, { Component } from 'react'

import { connect } from 'react-redux';
import { actionDeleteTask, actionOpenModal, actionGetEditTask } from '../../../actions';

export class TaskItemComponent extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            status: nextProps.task.status
        })
    }
    getLabelColor = (label) => {
        switch (label) {
            case 'Frontend':
                return '#389E0D';
            case 'Backend':
                return '#722ED1';
            case 'API':
                return '#13C2C2';
            case 'Issue':
                return '#CF1322';
            default: return ''
        }
    }
    renderLabel = (labelArr) => {
        return labelArr.map((label, index) => {
            return <i
                key={index}
                className="fa fa-circle mr-1"
                style={{ color: this.getLabelColor(label) }}
            />
        })
    }
    getPriority = (priority) => {
        var textPriority = '';
        switch (priority) {
            case 1:
                textPriority = <i className="text-danger">Cao</i>;
                break;
            case 2:
                textPriority = <i className="text-success">Trung Bình</i>
                break;
            case 3:
                textPriority = <i className="text-info">Thấp</i>;
                break;
            default: textPriority = '';
        }
        return textPriority;
    }
    getStatusIcon = (status) => {
        var iconStatus = '';
        switch (status) {
            case 1:
                iconStatus = <i className="fa fa-bed"></i>;
                break;
            case 2:
                iconStatus = <i className="fa fa-spinner"></i>
                break;
            case 3:
                iconStatus = <i className="fa fa-check-square-o"></i>;
                break;
            case 4:
                iconStatus = <i className="fa fa-trash"></i>;
                break;

            default: iconStatus = '';
        }
        return iconStatus;
    }
    getMembers = (memberList) => {
        return memberList.map((mem, index) => {
            return <img key={index} className="user" alt="hinh anh" src={`./img/${mem}.jpg`} />
        })
    }
    deleteTaskItem = (id) => {
        this.props.onDeteTask(id);
    }
    handleEditClick = (status, task) => {
        console.log(status);
        
        this.props.onOpenEditModal(status);
        // this.props.setEditStatus(status);
        // this.props.getEditTask(task) ->cũ
        this.props.onGetEditTask(task);
    }
    handleOnChange = () => {

    }
    render() {
        //destructuring ES6
        var { task, index } = this.props;
        // console.log(task)
        // => var task = this.props.task;
        // => var index = this.props.index;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">
                    {this.renderLabel(task.labelArr)}

                </td>
                <td className="text-danger font-weight-bold text-center">
                    {this.getPriority(task.priority)}
                </td>
                <td className="text-center">
                    {this.getMembers(task.memberIDArr)}
                </td>
                <td className="text-center d-flex">
                    <button
                        data-toggle="modal"
                        data-target="#modalTask"
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => this.handleEditClick(true, task)}
                    >
                        Sửa
                    </button>
                    <button
                        onClick={() => this.deleteTaskItem(task.id)}
                        type="button"
                        className="btn btn-outline-danger mx-1"
                    >
                        Xóa
                    </button>
                    <select className="form-control" onChange={this.handleOnChange} value={task.status}>
                        <option value={1}>Chưa bắt đầu</option>
                        <option value={2}>Đang tiến hành</option>
                        <option value={3}>Hoàn thành</option>
                        <option value={4}>Hủy bỏ</option>
                    </select>
                </td>
                <td className="text-center">
                    {this.getStatusIcon(task.status)}
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => {
            dispatch(actionDeleteTask(id))
        },
        onOpenEditModal: (status) => {
            dispatch(actionOpenModal(status))
        },
        onGetEditTask: (task) =>{
            dispatch(actionGetEditTask(task))
        }
    }
}




export default connect(null, mapDispatchToProps)(TaskItemComponent);