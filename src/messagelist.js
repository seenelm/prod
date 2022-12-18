import React, { useState } from 'react';

function MessageList() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((messages) => [...messages, message]);
  };

  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
}

export default MessageList;
