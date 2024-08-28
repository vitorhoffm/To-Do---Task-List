import styled from 'styled-components';

export const GlobalStyles = styled.div`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoginBackground = styled.div`
  flex: 7;
  background-size: cover;
  background-position: left;
`;

export const LoginContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CardForm = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
`;

export const LoginAvatar = styled.div`
  background-color: #003561;
  padding: 1rem;
  border-radius: 10px 10px 0px 0px;
`;

export const LoginLockIcon = styled.span`
  font-size: 2rem;
  color: white;
`;

export const LoginTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 300px;
  padding: 3rem;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const LoginButton = styled.button`
  width: 80%;
  padding: 0.75rem;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #303f9f;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HorizontalLine = styled.hr`
  background-color: #000000;
  width: 10rem;
  border: none;
  height: 1px;
`;

export const LoginLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginLinksAnchor = styled.a`
  color: #3f51b5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
