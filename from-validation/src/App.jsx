import React, { useState } from "react"
import "./LoginFrom.css"


function App() {
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErros] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  }

  const validate = () => {
    const newErros = {};

    if (!fromData.name.trim()) {
      newErros.name = "Name is required";
    }

    if (!fromData.email.includes("@")) {
      newErros.email = "please enter valid email";
    }
    if (!fromData.password && fromData.password.length < 8) {
      newErros.password = "password must be 8 characters long"
    }

    setErros(newErros);
    return Object.keys(newErros).length === 0;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("from is submitred successfully!");
      setFromData({ name: "", email: "", password: "" });
      setErros({});
    }
  }

  return (
    <div className="app">
      <form
        onSubmit={handleSubmit}
        className="form-container"
      >
        <h2>Login From</h2>
        <hr />

        {/* NAME FIELD */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={fromData.name}
            onChange={handleChange}
            className="form-input"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>


        {/* EMAIL FIELD */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={fromData.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* PASSWORD FIELD */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={fromData.password}
            onChange={handleChange}
            className="form-input"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="submit-btn"
        >
          Submit
        </button>
      </form>

    </div>
  );
}

export default App
