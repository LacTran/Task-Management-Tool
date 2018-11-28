import React, { Component } from 'react';
import {connect} from 'react-redux';

import { actionOpenModal } from '../../../actions';
 class AddNewTask extends Component {
    openAddModal(stt){
        // console.log(this.props.setEditStatus);
        
        this.props.onOpenAddModal(stt);
        // this.props.setEditStatus(stt);
    }
    render() {
        return (
            <button
              type="button"
              className="btn my-3 btn--newTask"
              data-toggle="modal"
              data-target="#modalTask"
              onClick= {() => this.openAddModal(false)}
            >
                <i className="fa fa-pencil-square-o" />
                    Tạo Task mới 
            </button>
        );
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        onOpenAddModal: (status) => {

            
            dispatch(actionOpenModal(status))
        }
    }
}


export default connect(null,mapDispatchToProps) (AddNewTask);


