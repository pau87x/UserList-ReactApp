import React, { Component } from 'react';

class AddUserButton extends Component {
  handleClick = () => {
    this.props.selectUser(null)
  }

  render() {
    const userSelected = this.props.userSelected;
    if(userSelected!==null){
      return (
        <div>
          <button className="btn btn-primary" 
          onClick={this.handleClick}>New User</button>
          <br/>
        </div>
      );
    }else{
      return (
        <div>
        </div>
      );
    }
  }
}

export default AddUserButton;
