import React, { Component } from 'react';

export class FilterLabel extends Component {
    filterByLabel = (type,value) =>{
        this.props.getFilter(type,value)
        
    }
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left">
                    Nhãn
            <li className="py-1 display-5 lead" onClick ={()=> this.filterByLabel('label', 'Frontend')}>
                        <i className="fa fa-circle mr-2" />Frontend
            </li>
                    <li className="py-1 display-5 lead" onClick = {()=> this.filterByLabel('label', 'Backend')}>
                        <i className="fa fa-circle mr-2" />Backend
            </li>
                    <li className="py-1 display-5 lead" onClick ={()=> this.filterByLabel('label', 'API')}>
                        <i className="fa fa-circle mr-2" />API
            </li>
                    <li className="py-1 display-5 lead" onClick ={()=> this.filterByLabel('label', 'Issue')}>
                        <i className="fa fa-circle mr-2" />Issue
            </li>
                </ul>
            </div>
        );
    }
}

