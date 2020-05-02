import React from 'react';

import olistImg from '../../../assets/logo-olist.png';
import mercadoLivreImg from '../../../assets/logo-mercadolivre.png';

import Card from '../../../components/Card';
import Button from '../../../components/Button';

import { Container, Info } from './styles';

export default function SignUp() {
  return (
    <Container>
      <Card>
        <form>
          <Info>
            Conexão <img src={olistImg} alt="Conexão Olist" /> efetuada com
            sucesso
          </Info>

          <h1>Cadastro de Dados</h1>

          <label htmlFor="name">Nome</label>
          <input id="name" name="name" value="" placeholder="Digite seu nome" />

          <label htmlFor="last_name">Sobrenome</label>
          <input
            id="last_name"
            name="last_name"
            value=""
            placeholder="Digite seu sobrenome"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value=""
            placeholder="Digite seu email"
          />

          <label htmlFor="whatsapp">Whatsapp</label>
          <input
            id="whatsapp"
            name="whatsapp"
            value=""
            placeholder="Digite seu celular"
          />

          <p>
            O cadastro de seu WhatsApp lhe proporcionará uma melhor experiência
            na otimização das respostas dos seus clientes.
          </p>

          <Button type="submit">Enviar</Button>
        </form>
      </Card>
    </Container>
  );
}
