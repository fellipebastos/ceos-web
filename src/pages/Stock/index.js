import React, { useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { MdArrowDropDown } from 'react-icons/md';

import api from '../../services/api';

import Card from '../../components/Card';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import { Container, Header, Body, MessageSent } from './styles';
import Loading from '../../components/Loading';

export default function Stock() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await api.get('product/list');

      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  return (
    <Container>
      {!products.length ? (
        <Loading />
      ) : (
        <>
          <Button>
            Mais Vendidos <MdArrowDropDown />
          </Button>

          <div>
            {products.map((product, index) => (
              <Card key={product.id}>
                <Header>
                  <img src={product.image} alt="Blazer amarelo" />
                  <div>
                    <h1>{product.name}</h1>
                    <span>
                      <strong>Cód:</strong> {product.code}
                    </span>
                    <span>
                      <strong>Quantidade:</strong> {product.stock}
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
                        defaultValue={
                          index === 0 ? 'Qual a largura do produto?' : ''
                        }
                        disabled={index === 0}
                        placeholder="Digite a pergunta"
                      />
                    </div>
                    <div label="Resposta">
                      <Textarea
                        type="textarea"
                        name="message"
                        rows={2}
                        defaultValue={
                          index === 0 ? 'O produto tem a largura de 50cm.' : ''
                        }
                        disabled={index === 0}
                        placeholder="Digite a resposta"
                      />
                    </div>

                    {index === 0 ? (
                      <MessageSent>Resposta enviada com sucesso!</MessageSent>
                    ) : (
                      <Button type="submit">Enviar</Button>
                    )}
                  </Form>
                </Body>
              </Card>
            ))}
          </div>
        </>
      )}
      {/* <p>3 de 50 produtos</p> */}
    </Container>
  );
}
