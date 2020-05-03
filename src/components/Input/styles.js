import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
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
`;
