import React from 'react';

class Splash extends React.Component {

  render_header() {
    return (
      <header  id="splash-header">
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

  }

  render() {
    return (
      <div id="splash">
        { this.render_header() }
        <h1 id="test">Shlack</h1>
      </div>
    )
  }
}

export default Splash;
