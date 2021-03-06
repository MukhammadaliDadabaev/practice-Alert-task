import React, { Component } from "react";

class App extends Component {
  state = {
    agreement: false,
    email: "",
  };

  handelChecked = (e) => {
    e.preventDefault();
    if (e.target.name) {
      alert("👏 Congratulations!!!");
    } else if (this.state.name) {
      alert(this.state.email);
    } else if (!this.state.name) {
      alert("Please accept our rules");
    } else {
      alert("This email is not valid");
    }
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  render() {
    const { agreement } = this.state;
    return (
      <div className="wrapper">
        <div className="title">
          <h1>Contact Us</h1>
        </div>
        <form>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <br />

          <div>
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              value={agreement}
              onBlur={this.handelChecked}
            />
            <label htmlFor="agreement">Terms & Conditions</label>
          </div>
          <button className="btn" onClick={this.handelChecked}>
            — Submit
          </button>
        </form>
      </div>
    );
  }
}
export default App;
