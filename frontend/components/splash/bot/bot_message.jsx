import React from 'react';

const BotMessage = ({ message, id }) => {
  let date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ampm;
  return (
    <div className="splash-message" id={id} >
      <div className="bot-message-header">
        <h3 className="bot-name">B</h3>
        <div>
          <p>shlack_bot</p>
          <p className="bot-message-time">Today at {strTime}</p>
        </div>
      </div>
      <h3>{message}</h3>
    </div>
  )
}

export default BotMessage;
