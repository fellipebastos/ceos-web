import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

import { Container as PageContainer } from '../../components/Page/styles';
import { Container as Card } from '../../components/Card/styles';

export const Container = styled(PageContainer)`
  & > button {
    margin-bottom: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1rem;

    color: ${({ theme }) => theme.color.grayDark};
    background: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & > div {
    display: flex;
    flex-wrap: wrap;

    ${Card} {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      padding: 1rem;
      margin-bottom: 2rem;

      @media ${breakpoints.xl} {
        flex-basis: 32%;

        & + div {
          &:not(:nth-child(3n + 4)) {
            margin-left: 2%;
          }

          &:nth-child(3n + 4) {
            margin-left: 0;
          }
        }
      }
    }

    & > p {
      flex-basis: 100%;
      margin-top: 2rem;
      font-size: ${({ theme }) => theme.font.size.large};
      text-align: right;
    }
  }
`;

export const Header = styled.div`
  display: flex;

  & > img {
    margin-left: -8px;
    width: 150px;
    height: 150px;
    border-radius: ${({ theme }) => theme.border.radius.normal};
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 0.5rem;
    margin-bottom: 8px;

    h1 {
      font-size: ${({ theme }) => theme.font.size.large};
    }
  }
`;

export const Body = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: flex-end;

  button {
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.green};
    border-radius: ${({ theme }) => theme.border.radius.large};

    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.medium};
  }
`;
