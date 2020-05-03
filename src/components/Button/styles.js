import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.865rem 3.25rem;
  border: 0;
  border-radius: ${({ theme }) => theme.border.radius.normal};

  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.blueDark};
  box-shadow: ${({ theme }) => theme.shadow.normal};
`;
