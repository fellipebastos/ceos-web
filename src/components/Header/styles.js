/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { Container as PageContainer } from '../Page/styles';

export const Container = styled(PageContainer).attrs({ as: 'header' })`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 0rem !important;
  box-shadow: ${({ theme }) => theme.shadow.normal};
`;

export const Profile = styled.div`
  position: relative;

  button {
    position: relative;
    z-index: 10;

    display: flex;
    align-items: center;
    padding: 8px 60px;

    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    color: ${({ theme }) => theme.color.grayDark};
    background: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.border.radius.large};

    img {
      width: 64px;
      height: 64px;
      margin-right: 1rem;
    }

    svg {
      margin-left: 8px;
    }
  }

  form {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    padding: 4rem 1rem 1rem 1rem;

    background: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.normal};

    button:first-of-type {
      align-self: center;
      background: ${({ theme }) => theme.color.grayLight};
      color: ${({ theme }) => theme.color.white};
      margin: 1.5rem 0;
    }

    button:last-of-type {
      align-self: center;
      background: transparent;
      color: ${({ theme }) => theme.color.red};
      margin: 1.5rem 0;

      border: 2px solid ${({ theme }) => theme.color.red};
    }

    hr {
      border-width: 0.5px;
      border-color: ${({ theme }) => theme.color.grayVeryLight};
    }
  }
`;

export const Menu = styled.nav`
  flex-basis: 100%;
  display: flex;
  overflow-x: auto;
`;

export const MenuLink = styled.div`
  margin-top: 1rem;

  & + div {
    margin-left: 4rem;
  }

  a {
    position: relative;

    display: flex;
    align-items: center;
    padding-bottom: 1.2rem;

    color: ${({ theme }) => theme.color.gray};
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-decoration: none;

    border-bottom: 2px solid transparent;
    transition: border 0.2s ease-in-out;

    ${({ active }) =>
      active &&
      css`
        color: ${({ theme }) => theme.color.grayDark};
        border-color: ${({ theme }) => theme.color.blue};
      `}

    ${({ badge }) =>
      badge &&
      css`
        &::after {
          content: '${badge}';
          position: absolute;
          top: -8px;
          left: 14px;

          min-width: 0.6rem;
          min-height: 0.4rem;

          display: flex;
          justify-content: center;
          padding: 0.2rem 0.3rem;

          font-size: 10px;
          color: white;
          background: red;
          border-radius: 50%;
          filter: grayscale(0.4);
        }
      `}

    ${({ active }) =>
      active &&
      css`
        &::after {
          filter: grayscale(0);
        }
      `}

    &:hover {
      border-color: ${({ theme }) => theme.color.blue};
    }

    svg {
      margin-right: 8px;
      color: ${({ theme }) => theme.color.blueVeryLight};

      ${({ active }) =>
        active &&
        css`
          color: ${({ theme }) => theme.color.blue};
        `}
    }
  }
`;
