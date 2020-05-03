import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  padding: 1rem;

  @media ${breakpoints.lg} {
    padding: 2rem;
  }
`;
