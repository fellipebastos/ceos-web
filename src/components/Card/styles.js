import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  border-radius: ${(p) => p.theme.border.radius.normal};

  background: ${(p) => p.theme.color.white};
  box-shadow: ${(p) => p.theme.shadow.normal};
`;
