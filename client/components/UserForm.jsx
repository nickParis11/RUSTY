import React, { Component } from 'react';
import axios from 'axios';
const UserForm = () => (
  <div>userform</div>
);

/*
class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
    };
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email } = this.state;

    axios.post('/', { fname, lname, email })
         .then((result) => {
           //access the results here....
         });
  }

  render() {
    const { fname, lname, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="fname" value={fname} onChange={this.onChange} />
        <input type="text" name="lname" value={lname} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
*/


export default UserForm;
