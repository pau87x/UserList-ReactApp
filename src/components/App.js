import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

class App extends Component {
  state = {
    error: null,
    isLoaded: true,
    users: {},
    userSelected: null
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
          <UserForm users={users} userSelected={userSelected}/>
        </div>
      );
    }
  }
}

  export default App;