import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.name || !formData.email) {
      setError("Both fields are required.");
      return;
    }

    // Add user to the list
    setUsers([...users, formData]);
    setFormData({ name: "", email: "" }); // Clear the form
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>User Registration</h1>
      </header>
      <main className="main-content">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
        <section className="user-list">
          <h2>Registered Users</h2>
          {users.length > 0 ? (
            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          ) : (
            <p>No users registered yet.</p>
          )}
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 User Registration App</p>
      </footer>
    </div>
  );
};

export default App;
