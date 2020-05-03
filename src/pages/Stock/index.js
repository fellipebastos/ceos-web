import React from 'react';
import { Form } from '@unform/web';
import { MdArrowDropDown } from 'react-icons/md';

import stock1 from '../../assets/stock-thumb1.png';
import stock2 from '../../assets/stock-thumb2.png';
import stock3 from '../../assets/stock-thumb3.png';

import Card from '../../components/Card';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import { Container, Header, Body, MessageSent } from './styles';

export default function Stock() {
  return (
    <Container>
      <Button>
        Mais Vendidos <MdArrowDropDown />
      </Button>

      <div>
        <Card>
          <Header>
            <img src={stock1} alt="Blazer amarelo" />
            <div>
              <h1>Blazer amarelo</h1>
              <span>
                <strong>Cód:</strong> 254667
              </span>
              <span>
                <strong>Quantidade:</strong> 04
              </span>
              <span>
                <strong>Vendidas | Semana:</strong> 05
              </span>
              <span>
                <strong>Vendidas | Mês:</strong> 15
              </span>
            </div>
          </Header>

          <Body>
            <strong>
              Crie especificidades em seu produto adicionando possíveis
              perguntas e respostas.
            </strong>

            <Form>
              <div label="Pergunta">
                <Textarea
                  type="textarea"
                  name="question"
                  rows={2}
                  placeholder="Digite a pergunta"
                />
              </div>
              <div label="Resposta">
                <Textarea
                  type="textarea"
                  name="answer"
                  rows={2}
                  placeholder="Digite a resposta"
                />
              </div>

              {/* <MessageSent>Resposta enviada com sucesso!</MessageSent> */}
              <Button type="submit">Enviar</Button>
            </Form>
          </Body>
        </Card>
        <Card>
          <Header>
            <img src={stock2} alt="Bermuda Masculina" />
            <div>
              <h1>Bermuda Masculina</h1>
              <span>
                <strong>Cód:</strong> 355662
              </span>
              <span>
                <strong>Quantidade:</strong> 12
              </span>
              <span>
                <strong>Vendidas | Semana:</strong> 02
              </span>
              <span>
                <strong>Vendidas | Mês:</strong> 09
              </span>
            </div>
          </Header>

          <Body>
            <strong>
              Crie especificidades em seu produto adicionando possíveis
              perguntas e respostas.
            </strong>

            <Form>
              <div label="Pergunta">
                <Textarea
                  type="textarea"
                  name="question"
                  rows={2}
                  placeholder="Digite a pergunta"
                />
              </div>
              <div label="Resposta">
                <Textarea
                  type="textarea"
                  name="answer"
                  rows={2}
                  placeholder="Digite a resposta"
                />
              </div>

              {/* <MessageSent>Resposta enviada com sucesso!</MessageSent> */}
              <Button type="submit">Enviar</Button>
            </Form>
          </Body>
        </Card>
        <Card>
          <Header>
            <img src={stock3} alt="Tênis de corrida" />
            <div>
              <h1>Tênis de corrida</h1>
              <span>
                <strong>Cód:</strong> 562289
              </span>
              <span>
                <strong>Quantidade:</strong> 20
              </span>
              <span>
                <strong>Vendidas | Semana:</strong> 05
              </span>
              <span>
                <strong>Vendidas | Mês:</strong> 10
              </span>
            </div>
          </Header>

          <Body>
            <strong>
              Crie especificidades em seu produto adicionando possíveis
              perguntas e respostas.
            </strong>

            <Form>
              <div label="Pergunta">
                <Textarea
                  type="textarea"
                  name="question"
                  rows={2}
                  placeholder="Digite a pergunta"
                />
              </div>
              <div label="Resposta">
                <Textarea
                  type="textarea"
                  name="answer"
                  rows={2}
                  placeholder="Digite a resposta"
                />
              </div>

              <MessageSent>Enviado com sucesso!</MessageSent>
              {/* <Button type="submit">Enviar</Button> */}
            </Form>
          </Body>
        </Card>
      </div>
      {/* <p>3 de 50 produtos</p> */}
    </Container>
  );
}
