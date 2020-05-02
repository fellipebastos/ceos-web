import React from 'react';
import { useLocation } from 'react-router-dom';

import logoCeos from '../../assets/logo-ceos-white.png';

import SignIn from './SignIn';
import SignUp from './SignUp';

import { Container, Content } from './styles';

export default function Auth() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <img src={logoCeos} alt="Ceos" />
        <p>Otimizando do seu negócio através da comunicação.</p>
      </Content>

      {pathname !== '/signup' ? <SignIn /> : <SignUp />}
    </Container>
  );
}
