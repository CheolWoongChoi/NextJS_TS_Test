import styled from '@emotion/styled';
import { TButtonProps } from './index';

const Button = styled.button<Partial<TButtonProps>>`
  margin-top: 30px;
  padding: 10px;
  background-color: yellow;
  font-size: 30px;

  color: ${(props) => props.theme.color.red};

  &:hover {
    color: orange;
  }
`;

export default {
  Button,
};
