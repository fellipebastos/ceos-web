import React from 'react';
import { Link } from 'react-router-dom';

import smileIcon from '../../../assets/smile.svg';
import phoneIcon from '../../../assets/phone.svg';
import clockIcon from '../../../assets/clock.svg';
import olistImg from '../../../assets/logo-olist.png';
import mercadoLivreImg from '../../../assets/logo-mercadolivre.png';

import Card from '../../../components/Card';
import Button from '../../../components/Button';

import { Container } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Card>
        <h1>Login</h1>

        <Button>
          <Link to="/signup">
            <img src={olistImg} alt="Login Olist" />
          </Link>
        </Button>
        <Button>
          <img src={mercadoLivreImg} alt="Login Mercado Livre" />
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
