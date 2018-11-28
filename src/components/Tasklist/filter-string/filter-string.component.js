import React, { Component } from 'react';

export class FilterStringComponent extends Component {
    render() {
        return (
            <div className="container-fluid px-0">
              <div className="row header header--right d-flex align-items-center mx-0">
                <div className="col-md-6">
                  <div className=" d-flex justify-content-between">
                    <h3 className="text-left ml-2 ">
                      Danh sách công việc
              </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group text-left my-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm công việc"
                    />
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

