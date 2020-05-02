import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: column;

    max-width: 424px;
    height: 100%;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-top: 2rem;

    @media ${breakpoints.lg} {
      margin-top: 0;
    }

    h1 {
      font-size: ${({ theme }) => theme.font.size.large};
      margin-bottom: 80px;
    }

    button {
      width: 100%;
      padding: 0;

      color: #000;
      background: ${({ theme }) => theme.color.white};

      & + button {
        margin-top: 57px;
      }

      a {
        display: block;
      }

      img {
        width: 100px;
      }
    }

    input[type='checkbox'] {
      margin-top: 34px;
      margin-right: 10px;
    }

    ul {
      margin-top: 91px;
      list-style: none;

      li {
        color: ${({ theme }) => theme.color.blueSemiLight};

        & + li {
          margin-top: 15px;
        }

        img {
          margin-right: 8px;
          vertical-align: middle;
        }
      }
    }
  }
`;
