import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  padding: 1rem;

  background: ${({ theme }) => theme.color.blue};

  @media ${breakpoints.lg} {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
  }
`;

export const Content = styled.div`
  max-width: 392px;

  @media ${breakpoints.xl} {
    margin-left: 120px;
  }

  img {
    width: 100%;
    margin-top: -35px;
    margin-left: -35px;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.white};
  }
`;
