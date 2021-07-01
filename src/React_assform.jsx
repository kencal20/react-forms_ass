import React, { Component } from "react";

class React_ass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      FullName: "",
      Phonenumber: "",
      KinPhone: "",
      Checkbox1: "",
      Checkbox2: "",
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
      console.log(this.state.Email);
      console.log(this.state.FullName);
      console.log(this.state.Phonenumber);
      console.log(this.state.KinPhone);
      console.log(this.state.Checkbox1);
      console.log(this.state.Checkbox2);
    };
  }
  render() {
    return (
      <form>
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
            placeholder="Your answer"
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
            placeholder="Your answer"
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
            placeholder="Your answer"
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
            placeholder="Your answer"
          />
        </div>
        <br />
        <br />
        <div className="fillings">
          <div className="checkbox">
            <label>
              <b>
                Can you pay 60% or more of the full Codetrain fees (GHS6000 for
                Ghanaian applicants or $1,200 for international applicants)
                <span>* </span>
              </b>
            </label>
            <br />
            <br />
            <input
              type="checkbox"
              name="checkbox"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <p>True</p>
            <input
              type="checkbox"
              name="checkbox"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <p>False</p>
          </div>
        </div>
        <br />
        <br />
        <div className="fillings">
          <div className="checkbox">
            <label>
              <b>
                Please indicate who is going to pay your fees
                <span>* </span>
              </b>
            </label>
            <br />
            <input
              type="checkbox"
              name="checkbox"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <p>Yourself</p>
            <input
              type="checkbox"
              name="checkbox"
              value={this.state.name}
              placeholder="Your answer"
              onChange={this.handleChange}
            />
            <p>Parent / Sponsor</p>
            <input
              type="checkbox"
              name="checkbox"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <p>Organization</p>
          </div>
        </div>
        <br />
        <br />
        <div className="fillings">
          <label>
            Location<span>*</span>
          </label>
          <br />
          <input
            type="text"
            name="School"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Your answer"
          />
        </div>
        <br />
        <br />
        <div className="fillings">
          <label>
            Current or previous school<span>*</span>
          </label>
          <br />
          <input
            type="text"
            name="Locaion"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Your answer"
          />
        </div>
        <br />
        <br />
        <div className="fillings">
          <label>
            Why do you want to join Codetrain<span>*</span>
          </label>
          <br />
          <input
            type="text"
            name="Joincodetrain"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Your answer"
          />
        </div>
        <br />
        <br />
        <div className="fillings">
          <label>
            How did you hear about Codetrain ?<span>*</span>
          </label>
          <br />
          <input
            type="text"
            name="Aboutcodetrain"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Your answer"
          />
        </div>
        <br />
        <br />
        <button onClick={this.handleSubmit} type="submit">
          Submit
        </button>
        <div className="Progress"></div>
      </form>
    );
  }
}

export default React_ass;
