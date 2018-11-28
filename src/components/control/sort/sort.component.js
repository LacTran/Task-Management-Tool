import React, { Component } from 'react';

export class SortComponent extends Component {
    handleOnChange =(e) =>{
        this.props.getSort('name',e.target.value);
    }
    render() {
        return (
            <div className="form-group text-left">
                <label>Sắp xếp theo công việc</label>
                <select className="form-control" onChange={this.handleOnChange}>
                    <option value= {1}>Từ A đến Z</option>
                    <option value= {-1}>Từ Z đến A</option>
                </select>
            </div>
        );
    }
}

