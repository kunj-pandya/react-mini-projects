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
    if (!fromData.password && fromData.password.length < 6) {
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
    <div>

      <h2>Login From</h2>

      <form
        onSubmit={handleSubmit}
      >

        {/* NAME FIELD */}
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={fromData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>


        {/* EMAIL FIELD */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={fromData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* PASSWORD FIELD */}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={fromData.password}
            onChange={handleChange}
          />
          {errors.password && <p>errors.password</p>}
        </div>
        
        <button
          type="submit"
        >
          Submit
        </button>

      </form>

    </div>
  );
}

export default App
