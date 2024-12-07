import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = () => {
    if (login === 'admin' && senha === '1234') {
      onLogin(); 
    } else {
      alert('Login ou senha incorretos!');
    }
  };

  return (
    <div className="login">
      <h1 className="titulo">LOGIN</h1>
      <div className="loginInput">
        <input
          type="text"
          placeholder="Digite seu login..."
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="senhaInput">
        <input
          type="password"
          placeholder="Digite sua senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button className="buttonSearch" onClick={handleSubmit}>
        Confirma
      </button>
    </div>
  );
}

export default Login;