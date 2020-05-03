import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

import { Container as PageContainer } from '../../components/Page/styles';

export const Container = styled(PageContainer)`
  h1 {
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 3rem;

  & > div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 1rem;
      /* margin-left: 2rem; */
    }

    & > div {
      margin-right: auto;
    }

    div + svg {
      display: none;
    }
  }

  & > div:nth-child(1) {
    background: ${({ theme }) => theme.color.blueLight};
    & > span {
      background: ${({ theme }) => theme.color.blue};
    }
  }

  & > div:nth-child(2) {
    background: ${({ theme }) => theme.color.purple};
    & > span {
      background: ${({ theme }) => theme.color.purpleDark};
    }
  }

  & > div:nth-child(3) {
    background: ${({ theme }) => theme.color.orange};
    & > span {
      background: ${({ theme }) => theme.color.orangeDark};
    }
  }

  @media ${breakpoints.lg} {
    flex-direction: row;

    & > div {
      flex: 1;

      & + div {
        margin-top: 0;
        margin-left: 2rem;
      }

      div + svg {
        display: initial;
      }
    }
  }

  @media ${breakpoints.xl} {
    & > div {
      div + svg {
        display: initial;
      }
    }
  }
`;

export const Graphics = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 3rem;

  div {
    /* flex: 1; */
    flex-grow: 1;

    & + div {
      margin-top: 1rem;
      /* margin-left: 2rem; */
    }

    p {
      text-align: center;
      font-size: ${({ theme }) => theme.font.size.medium};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      color: ${({ theme }) => theme.color.blueDark};
      margin-bottom: 1rem;
    }

    img {
      width: 100%;
    }
  }

  @media ${breakpoints.sm} {
    div {
      flex-grow: initial;
      flex: 1;

      & + div {
        margin-top: 0;
        margin-left: 2rem;
      }
    }
  }
`;
