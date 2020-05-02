import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.865rem 3.25rem;
  border: 0;
  border-radius: ${(p) => p.theme.border.radius.normal};

  color: ${(p) => p.theme.color.white};
  background: ${(p) => p.theme.color.blueDark};
  box-shadow: ${(p) => p.theme.shadow.normal};
`;
