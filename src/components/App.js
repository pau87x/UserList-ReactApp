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
    fetch('https://localhost:5001/api/User')
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
    { console.log(JSON.stringify(users[userSelected])) }
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
          <UserList users={users} selectUser={this.selectUser} />
          <UserForm users={users} userSelected={userSelected} 
          updateUser={this.updateUser} 
          updateUserDB={this.updateUserDB}/>
        </div>
      );
    }
  }
}

  export default App;