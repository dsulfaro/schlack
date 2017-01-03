import React from 'react';
import BotMessage from './bot_message';

class Bot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: ["Hey there, welcome to Shlack!",
                 "Shlack is a super cool chat meant to make teams for efficient",
                 "You can sign up and create a team and get Shlackin'",
                 "Or you can just click guest sign in to see what Shlack is all about",
                 "Go ahead! Give it a try!"]
    }
  }

  render() {
    return (
      <section id="splash-chat">
        <BotMessage message={this.state.messages[0]} />
      </section>
    )
  }

}

export default Bot;
