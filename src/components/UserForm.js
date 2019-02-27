import React, { Component } from 'react';
import '../css/UserForm.css';

class UserForm extends Component {
  handleChange = (event) => {
    const selected = this.props.userSelected;
    const updatedUser= {
      ...this.props.users[selected],
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateUser(selected, updatedUser);
  }

  render() {
    if (this.props.userSelected  === null) {
      return <div>Select a user</div>;
    } else {
      const selected = this.props.userSelected;
      const { id, name, username, email } = this.props.users[selected];

      return (
        <div className="content">
          <h3>User Data</h3>
          <hr/>
          <form id="userform">
            <div className="form-group hidden">
              <label>Id:</label>
              <input type='text' name='id' 
              onChange={this.handleChange} 
              value={id} 
              className='form-control'/>
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input type='text' name='name' 
              onChange={this.handleChange} 
              value={name} 
              className='form-control'/>
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input type='text' name='username' 
              onChange={this.handleChange} 
              value={username} 
              className='form-control'/>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type='text' name='email' 
              onChange={this.handleChange} 
              value={email} 
              className='form-control'/>
            </div>
            <button 
              className="btn btn-default" 
              onClick={this.props.updateUserDB}>
              Actualizar
            </button>
            <br/>
          </form>
        </div>
      );
    }
  }
}

export default UserForm;
