import React, { useState } from 'react';

function MessageInputForm() {
  const [formData, setFormData] = useState({
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send message to server or add message to list of messages
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message:</label>
      <input
        type="text"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageInputForm;
