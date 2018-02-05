import React, { Component } from 'react';
import MainRegister from './main-register';
import RegisteredUsers from './registered-users';
//import '../../style/style.scss';


export default class App extends Component {
  render() {
    return (
      <div>
        <p className="mainTitle">Intive - FDV Exercise</p>
        <div className="mainAppContainer">
        <MainRegister />
        <RegisteredUsers />
        </div>
      </div>
    );
  }
}
