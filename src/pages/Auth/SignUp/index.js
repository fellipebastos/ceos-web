import React from 'react';
import { Form } from '@unform/web';

import olistImg from '../../../assets/logo-olist.png';

import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Info } from './styles';

const handleSubmit = (data) => {
  console.log(data);
};

export default function SignUp() {
  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Info>
            Conexão <img src={olistImg} alt="Conexão Olist" /> efetuada com
            sucesso
          </Info>

          <h1>Cadastro de Dados</h1>

          <Input
            id="name"
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
          />

          <Input
            id="last_name"
            name="last_name"
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
          />

          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="Digite seu email"
          />

          <Input
            id="whatsapp"
            name="whatsapp"
            label="Whatsapp"
            placeholder="Digite seu celular"
          />

          <p>
            O cadastro de seu WhatsApp lhe proporcionará uma melhor experiência
            na otimização das respostas dos seus clientes.
          </p>

          <Button type="submit">Enviar</Button>
        </Form>
      </Card>
    </Container>
  );
}
