import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#7F77FF',
    background: '#FFF',
    text: '#1A212B',
    textSecondary: '#728197',
    border: '#9AA8BC',
    success: '#E1FCDE', 
    error: '#FC5275',
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontSize: {
      small: '24px',
      medium: '64px',
      large: '80px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    }
  },
  layout: {
    borderRadius: '4px',
    spacing: '8px',

  },
};

export default theme;