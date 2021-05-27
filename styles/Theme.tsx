import React from 'react';
import { ThemeProvider } from '@emotion/react';

export const theme = {
  color: {
    primary: '#111;',
    positive: '#222;',
    negative: '#333;',
    red: 'red',
    blue: 'blue',
    green: 'green',
  },
};

type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
