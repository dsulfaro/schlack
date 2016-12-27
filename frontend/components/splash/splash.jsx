import React from 'react';
import Modal from 'react-modal';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      siOpen: false,
    }
    this.open_sign_up_form = this.open_sign_up_form.bind(this);
    this.close_sign_up_form = this.close_sign_up_form.bind(this);
    this.render_sign_up_form = this.render_sign_up_form.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  open_sign_up_form() {
    this.setState({siOpen: true});
  }

  close_sign_up_form() {
    this.setState({siOpen: false});
  }

  render_sign_up_form() {
    return (
      <Modal
        isOpen={this.state.siOpen}
        contentLabel="Sign Up Form"
        >
        <form id="sign-up-form">
          <h1 onClick={this.close_sign_up_form}>Hello</h1>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
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
          <li id="splash-sign-in">Sign in</li>
        </ul>
      </header>
    )
  }

  render_footer() {
    return (
      <footer id="splash-footer">
        <p id="splash-sign-up" onClick={this.open_sign_up_form}>Sign Up</p>
      </footer>
    )
  }

  render() {
    return (
      <div id="splash">
        { this.render_header() }
        <h1 id="test">Shlack</h1>
        { this.render_sign_up_form() }
        { this.render_footer() }
      </div>
    )
  }
}

export default Splash;
