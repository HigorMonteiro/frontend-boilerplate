'use client'
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  price?: string;
  children?: React.ReactNode;
}

const StyledCard = styled.div`
  max-width: 20rem;
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin: 1rem;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #4a5568;
`;

const Price = styled.div`
  color: #1a202c;
  font-size: 1.25rem;
`;

const Card: React.FC<CardProps> = ({ title, description, price, children }) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {price && <Price>{price}</Price>}
      {children}
    </StyledCard>
  );
};

export default Card;
