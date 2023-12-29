import styled from 'styled-components';
import theme from '../styles/theme';


export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
`;

export const Title = styled.h1`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSize.large};
  text-align: center;
  color: ${theme.colors.text};
`;
export const Description = styled.p`
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSize.small};
  text-align: center;
`;
