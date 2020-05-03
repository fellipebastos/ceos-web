import React, { useEffect, useState, useCallback } from 'react';
import { Form } from '@unform/web';
import { AiFillClockCircle } from 'react-icons/ai';
import { parseISO, formatRelative } from 'date-fns';
import { pt } from 'date-fns/locale';

import api from '../../services/api';

import user1 from '../../assets/user-question1.png';

import productInfoImg from '../../assets/product-info.svg';
import orderInfoImg from '../../assets/order-info.svg';

import Card from '../../components/Card';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import { Container, Header, Body, Time, MessageSent } from './styles';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const dateNow = new Date();

  useEffect(() => {
    async function fetchMessages() {
      const { data } = await api.get('message/list');

      setMessages(data.messages);
    }

    fetchMessages();
  }, []);

  const handleAnswer = useCallback(
    async (data, id) => {
      if (!data.awnser.length) return;

      const oldMessageIndex = messages.findIndex((m) => m.id === id);

      if (oldMessageIndex > -1) {
        await api.post(`message/awnser/${id}`, data);

        const freshMessages = messages.map((m) => {
          if (m.id === id) {
            m.message = data.awnser;
          }

          return m;
        });

        setMessages(freshMessages);
      }
    },
    [messages],
  );

  return (
    <Container>
      {!messages.length ? (
        <Loading />
      ) : (
        messages.map((message) => (
          <Card key={message.id}>
            <Header>
              <img src={user1} alt={`${message.name} ${message.lastname}`} />
              <div>
                <h1>{`${message.name} ${message.lastname}`}</h1>
                <div>
                  <img src={productInfoImg} alt="Informação do Produto" />
                  {message.product.name} | Cód: {message.product.code}
                </div>
                <div>
                  <img src={orderInfoImg} alt="Informação do Pedido" />
                  Pedido | {message.order}
                </div>
              </div>
            </Header>

            <Body>
              <div>
                <h1>Pergunta</h1>
                <p>{message.question}</p>
              </div>

              <Form
                initialData={{ awnser: message.message }}
                onSubmit={(e) => handleAnswer(e, message.id)}
              >
                <Textarea
                  type="textarea"
                  name="awnser"
                  rows={6}
                  placeholder="Digite a resposta"
                  disabled={!!message.message}
                />

                {message.message ? (
                  <MessageSent>Resposta enviada com sucesso!</MessageSent>
                ) : (
                  <div>
                    <Time>
                      <AiFillClockCircle />{' '}
                      {formatRelative(parseISO(message.created_at), dateNow, {
                        locale: pt,
                      })}
                    </Time>
                    <Button type="submit">Responder</Button>
                  </div>
                )}
              </Form>
            </Body>
          </Card>
        ))
      )}

      {/* <p>3 de 15 perguntas</p> */}
    </Container>
  );
}
