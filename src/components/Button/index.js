import React from 'react';

import { Container } from './styles';

export default function Button({ children, type = 'button', ...rest }) {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
}
