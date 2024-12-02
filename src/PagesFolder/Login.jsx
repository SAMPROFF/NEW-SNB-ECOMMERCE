import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Update state for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    if (email.trim() === '' || password.trim() === '') {
      toast.error('Please fill out all fields');
      return;
    }

    // Authenticate user (replace with actual logic)
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser && loggedUser.email === email && loggedUser.password === password) {
      localStorage.setItem('isLoggedIn', true);
      toast.success('Login successful');
      navigate('/');
    } else {
      toast.error('Incorrect email or password');
    }
  };

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-input">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
