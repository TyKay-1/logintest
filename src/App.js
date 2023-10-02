import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await axios.post('http:localhost:8080//api/auth/login', {
        username: username,
        password: password,
      });

      setError(null);
      // Đăng nhập thành công, bạn có thể thực hiện các hành động khác ở đây (chẳng hạn chuyển hướng trang).
      console.log('Login successful');
    } catch (error) {
      setError('Invalid username or password');
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
