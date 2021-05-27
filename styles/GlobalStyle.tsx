import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      #__next {
        margin: 30px 0 0 30px;
        border: solid 1px #000;
        padding: 32px;
        width: 375px;
        height: 600px;
      }
    `}
  />
);

export default GlobalStyle;
