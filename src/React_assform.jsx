import React, { Component } from "react";

class React_ass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      FullName: "",
      Phonenumber: "",
      KinPhone: "",
      radio1: "",
      radio2: "",
      Location: "",
      School: "",
      Joincodetrain: "",
      Aboutcodetrain: "",
    };
    this.handleChange = (e) => {
      this.setState = { [e.target.firstname]: e.target.value };
      this.setState = { [e.target.lastname]: e.target.value };
    };
    this.Submit = (e) => {
      e.preventDefault();
      console.log(this.state.firstname);
      console.log(this.state.lastname);
      console.log(this.state.email);
      console.log(this.state.gender);
      console.log(this.state.phonenumber);
      console.log(this.state.radaio);
    };
  }
  render() {
    return (
      <form onSubmit={this.Submit}>
        <div id="intro">
          <h1>Codetrain Registration Form</h1>
          <h4>
            This form is the first step to register codertain's program starting
            on 25th July 2020. our admission team will reach outafter
            successfully submitting your form
          </h4>
          <p>
            <span>* Required</span>
          </p>
        </div>
        <br />
        <br />
        <div className="fillings">
          <label>
            Email<span>*</span>
          </label>
          <br />
          <input
            type="text"
            name="Email"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <br />
        <br />
        <div className="fillings">
          <label>
            Full Name<span>*</span>
          </label>
          <br />
          <input
            type="text"
            name="Fullname"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <br />
        <br />
        <div className="fillings">
          <label>
            Phone Number<span>*</span>
          </label>
          <br />
          <input
            type="tel"
            name="Phone number"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <br />
        <br />
        <div className="fillings">
          <label>Phone number of next of kin</label>
          <br />
          <input
            type="tel"
            name="phonenumber"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <br />
      </form>
    );
  }
}

export default React_ass;
