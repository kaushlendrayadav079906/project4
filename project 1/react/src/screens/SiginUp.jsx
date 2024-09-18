import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function SignUp() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    email: "",
    userType: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false); // For redirection after successful signup
  const [message, setMessage] = useState(""); // To display success or error messages

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8888/ecomm/api/v1/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'John Doe',
            email: 'john@example.com',
            userId: 'john123',
            password: 'yourpassword',
        })
    });
    

      if (response.ok) {
        // Reset form and display success message
        setFormData({
          name: "",
          userId: "",
          email: "",
          userType: "",
          password: "",
        });
        setMessage("Registration successful! Redirecting to login...");

        // Redirect to login after 2 seconds
        setTimeout(() => {
          setRedirect(true);
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`); // Display error message
    }
  };

  // Redirect to login page on successful signup
  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form method="POST" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* User ID Field */}
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            name="userId"
            className="form-control"
            id="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* User Type Field */}
        <div className="mb-3">
          <label htmlFor="userType" className="form-label">
            User Type
          </label>
          <select
            name="userType"
            className="form-control"
            id="userType"
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <option value="">Select user type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        {/* Login Link */}
        <Link to="/login" className="btn btn-danger">
          Already Registered? Login
        </Link>
      </form>

      {/* Display message */}
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}
