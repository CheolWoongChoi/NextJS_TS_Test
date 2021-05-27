import '@emotion/react';
import { theme } from './styles/Theme';

declare module '@emotion/react' {
  export interface Theme {
    color: typeof theme.color;
  }
}
