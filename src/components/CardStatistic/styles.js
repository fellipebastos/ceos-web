import styled from 'styled-components';
import { darken } from 'polished';

import { Container as Card } from '../Card/styles';

export const Container = styled(Card)`
  display: flex;
  align-items: center;
  padding: 24px;

  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.large};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  p {
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const Icon = styled.span`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.border.radius.normal};

  margin-right: 1.5rem;

  /* svg {
    font-size: 30px;
  } */
`;
