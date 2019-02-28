import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';


class App extends Component {
  state = {
    error: null,
    isLoaded: true,
    users: {},
    userSelected: null,
    message: null
  }

  componentDidMount(){
    fetch('https://localhost:5001/api/user')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          users: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  addUser = (user) => {
    if (user) {
      fetch('https://localhost:5001/api/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((res => res.json()))
      .then(
        (result) => {
          const users = {...this.state.users };
          users[`user${Date.now()}`] = user;
          this.setState({ 
            users,
            message: "User created"
          });
        }
      )
    }
  }

  selectUser = (userKey) => {
    this.setState({ userSelected: userKey });
  }

  updateUser = (key, updatedUser) => {
    const users = {...this.state.users };
    users[key] = updatedUser;
    this.setState({ users });
  }

  updateUserDB = (event) => {
    event.preventDefault();
    const users = {...this.state.users };
    const userSelected = this.state.userSelected;
    const idUser = users[userSelected].id;

    if (idUser) {
      fetch('https://localhost:5001/api/user/'+idUser, {
        method: 'PUT',
        body: JSON.stringify(users[userSelected]),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((res => res.json()))
      .then(
        (result) => {
          this.setState({
            userSelected: null,
            message: "User updated"
          });
        }
      )
    }
  }

  render() {
    const { error, isLoaded, users, userSelected } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="root">
          <UserList users={users}
          userSelected={userSelected} 
          selectUser={this.selectUser} />
          <UserForm users={users} userSelected={userSelected} 
          addUser={this.addUser} 
          updateUser={this.updateUser} 
          updateUserDB={this.updateUserDB}/>
        </div>
      );
    }
  }
}

  export default App;