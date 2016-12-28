import React from 'react';
import Modal from 'react-modal';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      siOpen: false,
      suOpen: false,
      fname: "",
      lname: "",
      username: "",
      password: ""
    }
    this.open_sign_up_form = this.open_sign_up_form.bind(this);
    this.close_sign_up_form = this.close_sign_up_form.bind(this);
    this.render_sign_up_form = this.render_sign_up_form.bind(this);
    this.open_sign_in_form = this.open_sign_in_form.bind(this);
    this.close_sign_in_form = this.close_sign_in_form.bind(this);
    this.render_sign_in_form = this.render_sign_in_form.bind(this);
    this.handle_sign_up = this.handle_sign_up.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  open_sign_up_form() {
    this.setState({suOpen: true});
  }

  close_sign_up_form() {
    this.setState({suOpen: false});
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handle_sign_up(e) {
    e.preventDefault();
    const user = {"username": this.state.username,
                  "password": this.state.password,
                  "fname": this.state.fname,
                  "lname": this.state.lname };
    this.props.signup(user);
  }

  render_sign_up_form() {
    return (
      <Modal
        className="auth-modal"
        isOpen={this.state.suOpen}
        contentLabel="Sign Up Form"
        >
        <h2 onClick={this.close_sign_up_form} className="auth-form-cancel">x</h2>
        <form id="sign-up-form">
          <h1>sign up</h1>
          <input type="text" placeholder="first name" onChange={this.update("fname")}></input>
          <input type="text" placeholder="last name" onChange={this.update("lname")}></input>
          <input type="text" placeholder="username" onChange={this.update("username")}></input>
          <input type="password" placeholder="password" onChange={this.update("password")}></input>
          <button className="auth-button" onClick={this.handle_sign_up}>Sign Up</button>
        </form>
      </Modal>
    )
  }

  open_sign_in_form() {
    this.setState({siOpen: true});
  }

  close_sign_in_form() {
    this.setState({siOpen: false});
  }

  render_sign_in_form() {
    return (
      <Modal
        className="auth-modal"
        isOpen={this.state.siOpen}
        contentLabel="Sign Up Form"
        >
        <h2 onClick={this.close_sign_in_form} className="auth-form-cancel">x</h2>
        <form id="sign-up-form">
          <h1>welcome back</h1>
          <input type="text" placeholder="username" onChange={this.update("username")}></input>
          <input type="password" placeholder="password" onChange={this.update("password")}></input>
          <button className="auth-button">Sign In</button>
        </form>
      </Modal>
    )
  }

  render_header() {
    return (
      <header id="splash-header">
        <h1>shlack</h1>
        <ul>
          <li>Product</li>
          <li>Pricing</li>
          <li>Support</li>
          <li>Create a new team</li>
          <li>Find your team</li>
          <li id="splash-sign-in" onClick={this.open_sign_in_form}>Sign in</li>
        </ul>
      </header>
    )
  }

  render_footer() {
    return (
      <footer id="splash-footer">
        <p className="splash-sign-up" onClick={this.open_sign_up_form}>Sign Up</p>
        <p className="splash-sign-up">Guest Login</p>
      </footer>
    )
  }

  render() {
    return (
      <div id="splash">
        { this.render_header() }
        <div id="modal-container">
          { this.render_sign_up_form() }
          { this.render_sign_in_form() }
        </div>
        { this.render_footer() }
      </div>
    )
  }
}

export default Splash;
