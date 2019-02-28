import React, { Component } from 'react';
import '../css/UserList.css';
import User from './User';

class UserList extends Component {
  handleClick = () => {
    this.props.selectUser(null)
  }

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
        </select><br/>
        <button className="btn btn-primary" 
          onClick={this.handleClick}>
          New User
        </button>
        <br/>
      </div>
    );
  }
}

export default UserList;
