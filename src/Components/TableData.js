import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingDataUser = () => (this.props.dataUserProps.map((value,key)=>(
        <TableDataRow editFunClick={(user)=>this.props.editFunction(value)} userName = {value.name} index = {key.toString()} tel = {value.tel} permission = {value.permission}/>
    )));
    
    render() {
        return (
                <div className="col">
                    <table className="table table-striped table-hover">
                        <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.mappingDataUser()}
                        </tbody>
                    </table>
                </div>

        );
    }
}

export default TableData;