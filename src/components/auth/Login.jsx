// src/components/auth/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { username }; 
    dispatch(login(user));
    navigate('/');
  };

  return (
    <div className='login'>
      <h2>GİRİŞ YAP</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Kullanıcı Adı:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
