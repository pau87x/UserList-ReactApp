import React, { Component } from 'react';

class User extends Component {
  handleClick = () => {
    this.props.selectUser(this.props.index)
  }

  render() {
    const username = this.props.details.username;
    return (
      <option onClick={this.handleClick}>
        {username}
      </option>
    );
  }
}

export default User;
