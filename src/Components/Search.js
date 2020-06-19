import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : ''
        }
    }
    
    hienThiButton = () => {
        if(this.props.hienThiForm){
            return(
                <div className="btn btn-block btn-outline-secondary" onClick = {()=>this.props.ketNoi()} >Đóng lại</div>
            );
        }else{
            return(
                <div className="btn btn-block btn-outline-info" onClick = {()=>this.props.ketNoi()}>Thêm mới</div>
            );
        }
    }
    isChange = (event) => {
        this.setState({
            tempValue : event.target.value
        });
        this.props.checkConnectProps(event.target.value);
    }
    render() {
        return (
                <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập tên từ khóa" style={{width: '500px'}} />
                        <div className="btn btn-info" onClick={(text) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                   <div className="btn-group1">
                        {this.hienThiButton()}
                   </div>
                </div>
                <hr/>
            </div>
           
        );
    }
}

export default Search;  