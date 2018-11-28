import React, { Component } from 'react';
import { UserComponent } from './user/user.component';
import  AddNewTask  from './addnewtask/addnewtask.component';
import  FilterProgressComponent from './filter-progress/filter-progress.component';
import { FilterLabel } from './filter-label/filter-label.component';
import { SortComponent} from './sort/sort.component';
import { FilterPriority } from './filter-priority/filter-priority.component';

export class ControlComponent extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
            <UserComponent/>
            <AddNewTask />
            {/* Filter */}
            <div className="px-3">
            <FilterProgressComponent getFilter={this.props.getFilter} />
            <FilterLabel getFilter={this.props.getFilter} />
            <FilterPriority getFilter={this.props.getFilter}/>
            <SortComponent getSort={this.props.getSort}/>
            </div>
          </div>
        );
    }
}

