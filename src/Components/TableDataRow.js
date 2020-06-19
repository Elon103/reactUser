import React, { Component } from 'react';

class TableDataRow extends Component {
    
    userPermission = (permission) =>{
        switch(permission){
            case 1 :
                return "User";
            case 2 : 
                return "Moderator";
            case 3 : 
                return "Admin";
            default :
                return "Anonymouse";
        }
    }
    render() {
        return (
            <tr>
                <td >{this.props.index}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.userPermission(this.props.permission)}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua">
                    <i className="fa fa-edit" onClick={()=>this.props.editFunClick()}>Sửa</i>
                    </div>
                    <div className="btn btn-danger sua">
                    <i className="fa fa-trash">Xóa</i>
                    </div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;