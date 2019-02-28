import React, { Component } from 'react';
import '../css/UserList.css';
import User from './User';
import AddUserButton from './AddUserButton';

class UserList extends Component {
  render() {
    const users = this.props.users;
    return (
      <div className="content">
        <h2 id="list-user" className="text-primary">
          Users
        </h2>
        <hr/>
        <select name="users" multiple size="10" className="no-scroll">
          { Object.keys(users).map(key => (
            <User 
              key={key} 
              index={key} 
              details={users[key]} 
              selectUser={this.props.selectUser}/>
          ))}
        </select>
        <AddUserButton 
          userSelected={this.props.userSelected} 
          selectUser={this.props.selectUser}/>
      </div>
    );
  }
}

export default UserList;
