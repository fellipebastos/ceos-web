import React from 'react';
import { Form } from '@unform/web';
import { AiFillClockCircle } from 'react-icons/ai';

import user1 from '../../assets/user-question1.png';
import user2 from '../../assets/user-question2.png';
import user3 from '../../assets/user-question3.png';
import productInfoImg from '../../assets/product-info.svg';
import orderInfoImg from '../../assets/order-info.svg';

import Card from '../../components/Card';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import { Container, Header, Body, Time, MessageSent } from './styles';

export default function Messages() {
  return (
    <Container>
      <Card>
        <Header>
          <img src={user1} alt="Marina Ferraz" />
          <div>
            <h1>Marina Ferraz</h1>
            <div>
              <img src={productInfoImg} alt="Informação do Produto" />
              Sapatilha Amarela | Cód: 254445
            </div>
            <div>
              <img src={orderInfoImg} alt="Informação do Pedido" />
              Pedido | TGH-2653
            </div>
          </div>
        </Header>

        <Body>
          <div>
            <h1>Pergunta</h1>
            <p>A sapatilha é ortopédica?</p>
          </div>

          <Form>
            <Textarea
              type="textarea"
              name="answer"
              rows={6}
              placeholder="Digite a resposta"
            />

            <MessageSent>Resposta enviada com sucesso!</MessageSent>
          </Form>
        </Body>
      </Card>
      <Card>
        <Header>
          <img src={user2} alt="Renan Silveira" />
          <div>
            <h1>Renan Silveira</h1>
            <div>
              <img src={productInfoImg} alt="Informação do Produto" />
              Camisa de Time | Cód: 335964
            </div>
            <div>
              <img src={orderInfoImg} alt="Informação do Pedido" />
              Pedido | ASD-5533
            </div>
          </div>
        </Header>

        <Body>
          <div>
            <h1>Pergunta</h1>
            <p>
              A camisa vem com a parte de trás escrita ? Se vier, qual o nome e
              número do jogador?
            </p>
          </div>

          <Form>
            <Textarea
              type="textarea"
              name="answer"
              rows={6}
              placeholder="Digite a resposta"
            />

            <div>
              <Time>
                <AiFillClockCircle /> 30min
              </Time>
              <Button type="submit">Responder</Button>
            </div>
          </Form>
        </Body>
      </Card>
      <Card>
        <Header>
          <img src={user3} alt="Eduarda Carvalho" />
          <div>
            <h1>Eduarda Carvalho</h1>
            <div>
              <img src={productInfoImg} alt="Informação do Produto" />
              Camisa Elegante | Cód: 222563
            </div>
            <div>
              <img src={orderInfoImg} alt="Informação do Pedido" />
              Pedido | TYY-8894
            </div>
          </div>
        </Header>

        <Body>
          <div>
            <h1>Pergunta</h1>
            <p>A camisa faz a pessoa transpirar muito?</p>
          </div>

          <Form>
            <Textarea
              type="textarea"
              name="answer"
              rows={6}
              placeholder="Digite a resposta"
            />

            <div>
              <Time>
                <AiFillClockCircle /> 1h
              </Time>
              <Button type="submit">Responder</Button>
            </div>
          </Form>
        </Body>
      </Card>

      <p>3 de 15 perguntas</p>
    </Container>
  );
}
