import React, { useEffect, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import api from '../../services/api';

import Card from '../../components/Card';
import Button from '../../components/Button';

import { Container, Header, Body } from './styles';
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
            {products.map((product) => (
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
                  <Button type="button">Mais Detalhes</Button>
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
