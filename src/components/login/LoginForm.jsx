import React from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <>
      <StyledH1>Login</StyledH1>
      <input type="text" />
      <input type="text" />
      <StyledButton>로그인</StyledButton>
    </>
  );
};

const StyledH1 = styled.div`
  color: #305683;
  font-size: 30px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

export default LoginForm;
