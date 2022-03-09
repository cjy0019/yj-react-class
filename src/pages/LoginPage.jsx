import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import LoginForm from '../components/login/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
      <StyledP yongjin="yj" warning>
        hello 로그인입니다.
      </StyledP>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > p {
    font-weight: bold;
    color: green;
  }
`;

const StyledP = styled.p`
  ${(props) =>
    props.yongjin === 'yj' &&
    css`
      background-color: red;
    `}
`;

export default LoginPage;
