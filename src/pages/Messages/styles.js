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
    flex-wrap: wrap;
    flex-basis: 100%;
    padding: 1rem;

    & + div {
      margin-top: 40px;
    }

    @media ${breakpoints.xl} {
      flex: 1;

      & + div {
        margin-left: 2rem;
        margin-top: 0;
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
  flex-direction: column;
  flex: 1;

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
    flex: 1;
    margin-top: 2rem;
    width: 100%;
    position: relative;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-self: flex-end;
    justify-content: space-between;

    &::after {
      content: 'Responder';
      position: absolute;
      top: 0;
      left: 0;

      padding: 1rem;
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }

    textarea {
      align-self: flex-start;
      flex-basis: 100%;
      padding: 2.5rem 1rem 1rem 1rem;
      margin-bottom: 1rem;
      resize: none;

      font-size: ${({ theme }) => theme.font.size.medium};
    }

    button {
      align-self: center;

      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.green};
      border-radius: ${({ theme }) => theme.border.radius.large};

      font-weight: ${({ theme }) => theme.font.weight.medium};
      font-size: ${({ theme }) => theme.font.size.medium};
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
