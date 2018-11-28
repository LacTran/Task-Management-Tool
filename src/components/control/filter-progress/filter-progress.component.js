import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actionFilterByProgress } from '../../../actions';

class FilterProgressComponent extends Component {
    filterByProgress =(type, value) => {
        this.props.onGetFilter(type,value);
    }
    render() {
        return (
            <div className="filter filter--progress">
            <ul className="list-unstyled text-left">
              Lọc
                <li className="py-1 display-5 lead" onClick ={() => this.filterByProgress('progress', 1)}>
                    <i className="fa fa-bed mr-2"  />Chưa bắt đầu
                </li>
                <li className="py-1 display-5 lead" onClick ={() => this.filterByProgress('progress', 2)}>
                    <i className="fa fa-spinner mr-2"  />Đang Tiến Hành
                </li>
                <li className="py-1 display-5 lead" onClick ={() => this.filterByProgress('progress', 3)}>
                    <i className="fa fa-check-square-o mr-2"  />Hoàn thành
                </li>
                <li className="py-1 display-5 lead" onClick ={() => this.filterByProgress('progress', 4)}>
                    <i className="fa fa-trash-o mr-2"  />Hủy bỏ
                </li>
            </ul>
          </div>
        );
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onGetFilter: (type,value) =>{
            dispatch(actionFilterByProgress(type,value))
        }
    }
}

export default connect(null,mapDispatchToProps) (FilterProgressComponent);