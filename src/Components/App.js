import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';

const uuid = uuidv1();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm : false,
      data : DataUser,
      seachText : ''
    };
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }
  getTextSearch = (text) => {
    this.setState({
      seachText : text
    });
  }
  editUser = (user) => {
    console.log('ket noi thanh cong!');
    console.log(user);
  }
  getNewUserData = (item) => {
    var newUser = {};
    newUser.id = uuid;
    newUser.name = item.name;
    newUser.tel = item.tel;
    newUser.permission = item.permission;
    var items = this.state.data;
    items.push(newUser);
    this.setState({
      data : items
    });
    console.log('data',this.state.data);
  }
  // thongBao = () => {
  //   console.log("Kết nối thành công");
  // }
  render(){
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.seachText) !== -1){
        ketqua.push(item);
      }
    });
    console.log(ketqua);
    return (
      <div className="App">
          <Header></Header>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search checkConnectProps={(text)=>this.getTextSearch(text)} ketNoi = {() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm}/>
                <TableData editFunction = {(user)=>this.editUser(user)} dataUserProps = {ketqua}></TableData>
                <AddUser add={(item) => this.getNewUserData(item)} hienThiForm = {this.state.hienThiForm}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
}

export default App;
