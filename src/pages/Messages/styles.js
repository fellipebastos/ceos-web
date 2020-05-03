import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

import { Container as PageContainer } from '../../components/Page/styles';
import { Container as Card } from '../../components/Card/styles';

export const Container = styled(PageContainer)`
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
`;

export const Header = styled.div`
  display: flex;

  & > img {
    margin-left: -8px;
    width: 90px;
    height: 90px;
    border-radius: ${({ theme }) => theme.border.radius.normal};
  }

  & > div:first-of-type {
    margin-left: 0.5rem;

    h1 {
      font-size: ${({ theme }) => theme.font.size.large};
    }

    & > div {
      display: flex;
      align-items: center;
      margin-top: 5px;

      img {
        margin-right: 5px;
      }
    }
  }
`;

export const Body = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: 100%;
  align-content: space-between;

  & > div {
    h1 {
      font-size: ${({ theme }) => theme.font.size.medium};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }

    p {
      font-size: ${({ theme }) => theme.font.size.medium};
      margin-top: 5px;
    }
  }

  form {
    margin-top: 2rem;
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;

    &::after {
      content: 'Responder';
      position: absolute;
      top: 0;
      left: 0;

      padding: 1rem;
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }

    textarea {
      padding: 2.5rem 1rem 1rem 1rem;
      resize: none;
      margin-bottom: 1rem;

      font-size: ${({ theme }) => theme.font.size.medium};
    }

    & > div {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;

      button {
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.green};
        border-radius: ${({ theme }) => theme.border.radius.large};

        font-weight: ${({ theme }) => theme.font.weight.medium};
        font-size: ${({ theme }) => theme.font.size.medium};
      }
    }
  }
`;

export const MessageSent = styled.span`
  align-self: center;
  text-align: center;
  max-width: 360px;
  margin: 0 auto;
  padding: 1.5rem;
  background: ${({ theme }) => theme.color.greenLight};
  border-radius: ${({ theme }) => theme.border.radius.normal};
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;

  svg {
    color: ${({ theme }) => theme.color.orangeTwo};
    margin-right: 5px;
  }
`;
