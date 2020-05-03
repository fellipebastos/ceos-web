import React from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Container, Content, Icon } from './styles';

export default function CardStatistic({ color, icon, info, label }) {
  return (
    <Container color={color}>
      <Icon color={color}>{icon}</Icon>
      <Content>
        <p>{info}</p>
        <span>{label}</span>
      </Content>
      <AiOutlineLoading3Quarters size={50} />
    </Container>
  );
}
