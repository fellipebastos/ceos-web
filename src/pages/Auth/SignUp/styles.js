import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  margin-top: 2rem;

  @media ${breakpoints.lg} {
    margin-top: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.large};
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 360px;

    label {
      /* font-size: ${({ theme }) => theme.font.size.medium}; */
      margin-bottom: 8px;
    }

    input {
      padding: 0.8125rem 1.5rem;

      border: 2px solid ${({ theme }) => theme.color.grayVeryLight};
      border-radius: 32px;

      &,
      &::placeholder {
        color: ${({ theme }) => theme.color.grayLight};
      }

      & + label {
        margin-top: 1rem;
      }
    }

    p {
      margin-top: 1rem;
      margin-right: 30px;
      font-size: ${({ theme }) => theme.font.size.small};
    }

    button {
      margin-top: 1.5rem;

      font-size: ${({ theme }) => theme.font.size.large};
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }
`;

export const Info = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1rem;

  border-radius: ${({ theme }) => theme.border.radius.normal};
  background: ${({ theme }) => theme.color.blueVeryLight};

  img {
    max-width: 60px;
    vertical-align: middle;
    margin-top: -4px;
  }
`;
