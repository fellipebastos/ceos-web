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
      flex-grow: 1;
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
    width: 150px;
    height: 150px;
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
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: 100%;
  flex-direction: column;
  align-content: flex-start;

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
    margin-top: 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    flex: 1;

    & > div[label] {
      position: relative;

      &::after {
        content: attr(label);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        margin: 1px 1rem;
        padding: 0.5rem 0;
        background: white;
        font-weight: ${({ theme }) => theme.font.weight.bold};
      }

      &:last-of-type {
        margin-bottom: 1rem;
      }

      textarea {
        padding: 2.5rem 1rem 1rem 1rem;
        resize: none;
        width: 100%;

        font-size: ${({ theme }) => theme.font.size.medium};
      }
    }

    button {
      align-self: flex-end;
      margin-top: auto;

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
