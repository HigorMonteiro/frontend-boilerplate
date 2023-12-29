import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
`;

const Register = () => {
  return (
    <Container>
      <Title>Register page</Title>
    </Container>
  );
};

export default Register;
