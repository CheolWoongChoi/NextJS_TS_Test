import styled from '@emotion/styled';

type Props = {
  primary?: boolean;
};

export const ButtonContainer = styled.button<Props>`
  margin-top: 30px;
  padding: 10px;
  background-color: yellow;
  font-size: 30px;

  color: ${(props) => props.theme.color.red};

  &:hover {
    color: orange;
  }
`;
