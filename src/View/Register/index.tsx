import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GlobalStyles,
  RegisterContainer,
  RegisterBackground,
  RegisterContent,
  CardForm,
  RegisterAvatar,
  RegisterLockIcon,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  FlexCenter,
  HorizontalLine,
  RegisterLinks,
  RegisterLinksAnchor
} from './register.style';
import { toast } from 'react-toastify';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const RegisterHandle = async () => {
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

    const response = await fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.status === 201) {
      navigate('/');
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      <GlobalStyles />
      <RegisterContainer>
        <RegisterContent>
          <CardForm>
            <RegisterAvatar>
              <RegisterLockIcon>TaskList - Criar Conta</RegisterLockIcon>
            </RegisterAvatar>
            <RegisterForm>
              <RegisterInput
                type="email"
                id="email"
                name="email"
                placeholder="Usuário ou Email"
                required
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <RegisterInput
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FlexCenter>
                <RegisterButton type="button" onClick={RegisterHandle}>Cadastrar</RegisterButton>
                <HorizontalLine />
                <p>ou</p>
                <RegisterLinks>
                  <RegisterLinksAnchor href="/">Entrar</RegisterLinksAnchor>
                </RegisterLinks>
              </FlexCenter>
            </RegisterForm>
          </CardForm>
        </RegisterContent>
      </RegisterContainer>
    </>
  );
};

export default Register;
