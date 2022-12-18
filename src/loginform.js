import React, { useState } from 'react';
import './form.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // submit form data to server, or perform login action
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__label" htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="form__input"
      />
      <br />
      <label className="form__label" htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="form__input"
      />
      <br />
      <button className="form__button" type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
