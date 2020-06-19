import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="col">
            <div className="card text-left">
                <div className="card border-primary mb-3 mt-2">
                <div className="card-header">
                    Thêm mới
                </div>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" onChange = {(event) => this.isChange(event)} name="name" className="form-control"  aria-describedby="helpId" placeholder="Tên User" />
                        </div>
                        <div className="form-group">
                        <input type="text" name="tel" onChange = {(event) => this.isChange(event)}  className="form-control"  aria-describedby="helpId" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                        <select className="custom-select" onChange = {(event) => this.isChange(event)}  name="permission">
                            <option >Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <div className="btn btn-block btn-primary" onClick = {(item) => this.props.add(this.state.item)}>Thêm mới</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default EditUser;