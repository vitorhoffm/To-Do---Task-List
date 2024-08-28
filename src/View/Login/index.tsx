import React, { useState } from 'react';
import {
  GlobalStyles,
  LoginContainer,
  LoginBackground,
  LoginContent,
  CardForm,
  LoginAvatar,
  LoginLockIcon,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  FlexCenter,
  HorizontalLine,
  LoginLinks,
  LoginLinksAnchor
} from './login.style'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from 'Hooks/Context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setToken } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const loginHandle = async () => {
    if (username === "") {
      return toast.info("O nome de usuário não pode estar vazio!", {
        position: "top-right"
      });
    }
    if (password === "") {
      return toast.info("A senha não pode estar vazia!", {
        position: "top-right"
      });
    }

    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.access_token) {
      setToken(data.access_token);
      setIsLoggedIn(true);
    } else {
      toast.error(data.message, {
        position: "top-right"
      });
    }
  };

  if (isLoggedIn) {
    navigate('/home');
  }

  return (
    <>
      <GlobalStyles />
      <LoginContainer>
        <LoginContent>
          <CardForm>
            <LoginAvatar>
              <LoginLockIcon>TaskList - Entrar 🚀</LoginLockIcon>
            </LoginAvatar>
            <LoginForm>
              <LoginInput
                type="email"
                id="email"
                name="email"
                placeholder="Usuário ou Email"
                required
                autoFocus
                value={username}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
              />
              <LoginInput
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                required
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
              />
              <FlexCenter>
                <LoginButton type="button" onClick={loginHandle}>Entrar</LoginButton>
                <HorizontalLine />
                <p>ou</p>
                <LoginLinks>
                  <LoginLinksAnchor href="/register">Cadastre-se</LoginLinksAnchor>
                </LoginLinks>
              </FlexCenter>
            </LoginForm>
          </CardForm>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default Login;
