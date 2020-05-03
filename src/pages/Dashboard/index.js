import React from 'react';
import { MdReceipt } from 'react-icons/md';
import { AiOutlineTrophy } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';

import graphicImg from '../../assets/graphic.png';

import Card from '../../components/Card';
import CardStatistic from '../../components/CardStatistic';

import { Container, Statistics, Graphics } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>

      <Statistics>
        <CardStatistic
          label="Total de vendas | Mês"
          info="R$ 10.000,00"
          icon={<AiOutlineTrophy size={25} />}
        />
        <CardStatistic
          label="Total de vendas | Semana"
          info="R$ 2.000,00"
          icon={<MdReceipt size={25} />}
        />
        <CardStatistic
          label="Média de Respostas | Hora"
          info="2 horas"
          icon={<TiArrowBack size={25} />}
        />
      </Statistics>

      <Graphics>
        <Card>
          <p>Média de Resposta x Vendas Finalizadas | Mês</p>
          <img
            src={graphicImg}
            alt="Média de Resposta x Vendas Finalizadas | Mês"
          />
        </Card>
        <Card>
          <p>Média de Resposta x Vendas Finalizadas | Semana</p>
          <img
            src={graphicImg}
            alt="Média de Resposta x Vendas Finalizadas | Semana"
          />
        </Card>
      </Graphics>
    </Container>
  );
}
