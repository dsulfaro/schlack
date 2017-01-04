import React from 'react';

const BotMessage = ({ message, id }) => {
  return (
    <div className="splash-message" id={id} >
      <div className="bot-message-header">
        <h3 className="bot-name">B</h3>
        <div>
          <p>shlack_bot</p>
          <p className="bot-message-time">time</p>
        </div>
      </div>
      <h3>{message}</h3>
    </div>
  )
}

export default BotMessage;
