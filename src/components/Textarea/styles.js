import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Textarea = styled.textarea`
  padding: 0.8125rem 1.5rem;

  border: 1px solid ${({ theme }) => theme.color.grayVeryLight};
  border-radius: 10px;

  &,
  &::placeholder {
    color: ${({ theme }) => theme.color.grayLight};
  }

  & + label {
    margin-top: 1rem;
  }
`;
