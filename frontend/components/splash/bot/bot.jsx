import React from 'react';
import BotMessage from './bot_message';

class Bot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: ["Hey there, welcome to Shlack!",
                 "Shlack is a super cool chat meant to make teams more efficient",
                 "You can sign up and create a team and get Shlackin'",
                 "Or you can just click guest sign in to see what Shlack is all about",
                 "Go ahead! Give it a try!"]
    }
  }

  render() {
    return (
      <section id="splash-chat">
        <BotMessage message={this.state.messages[0]} id="bot0"/>
        <BotMessage message={this.state.messages[1]} id="bot1"/>
        <BotMessage message={this.state.messages[2]} id="bot2"/>
        <BotMessage message={this.state.messages[3]} id="bot3"/>
        <BotMessage message={this.state.messages[4]} id="bot4"/>
      </section>
    )
  }

}

export default Bot;
