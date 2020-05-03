import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';

import smileIcon from '../../../assets/smile.svg';
import phoneIcon from '../../../assets/phone.svg';
import clockIcon from '../../../assets/clock.svg';
import olistImg from '../../../assets/logo-olist.png';
import mercadoLivreImg from '../../../assets/logo-mercadolivre.png';

import Card from '../../../components/Card';
import Button from '../../../components/Button';

import { Container } from './styles';

const userCredentials = {
  email: 'ceos@email.com',
  password: 'q1w2e3r4',
};

export default function SignIn() {
  const { signIn } = useAuth();

  const handleSigIn = async () => {
    await signIn(userCredentials);
  };

  return (
    <Container>
      <Card>
        <h1>Login</h1>

        <Button onClick={handleSigIn}>
          <img src={olistImg} alt="Login Olist" />
        </Button>
        <Button>
          <Link to="/signup">
            <img src={mercadoLivreImg} alt="Login Mercado Livre" />
          </Link>
        </Button>

        <label>
          <input type="checkbox" name="rememberme" />
          Lembrar-me
        </label>

        <ul>
          <li>
            <img src={phoneIcon} alt="Aumenta chances na conversão de vendas" />
            Facilita a comunicação com seus clientes
          </li>
          <li>
            <img src={clockIcon} alt="Aumenta chances na conversão de vendas" />
            Otimiza o tempo de resposta de perguntas
          </li>
          <li>
            <img src={smileIcon} alt="Aumenta chances na conversão de vendas" />
            Aumenta chances na conversão de vendas
          </li>
        </ul>
      </Card>
    </Container>
  );
}
