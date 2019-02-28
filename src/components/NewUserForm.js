import React, { Component } from 'react';
import '../css/UserForm.css';

class NewUserForm extends Component {
  nameRef = React.createRef();
  usernameRef = React.createRef();
  emailRef = React.createRef();

  createUser = (event) => {
    event.preventDefault();
    const user = {
      name: this.nameRef.current.value,
      username: this.usernameRef.current.value,
      email: this.emailRef.current.value,
    }
    console.log(user);
    this.props.addUser(user);
  }

  render() {
    return (
      <div className="content">
        <h3>New User</h3>
        <hr/>
        <form id="userform" onSubmit={this.createUser}>
          <div className="form-group">
            <label>Name:</label>
            <input type='text' name='name' 
            ref={this.nameRef}
            className='form-control'/>
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input type='text' name='username' 
            ref={this.usernameRef}
            className='form-control'/>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type='text' name='email' 
            ref={this.emailRef}
            className='form-control'/>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <br/>
        </form>
      </div>
    );
  }
}

export default NewUserForm;
