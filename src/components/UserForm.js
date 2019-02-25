import React, { Component } from 'react';
import '../css/UserForm.css';

class UserForm extends Component {
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
          <div className="form-group">
            <label>Id:</label>
            <input type='text' name='name' value={id} className='form-control' readOnly/>
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type='text' name='name' value={name} className='form-control' readOnly/>
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input type='text' name='username' value={username} className='form-control' readOnly/>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type='text' name='email' value={email} className='form-control'readOnly/>
          </div>
        </form>
      </div>
    );
  }
}
}

export default UserForm;
