import React from 'react';
import S from './styles';

export type TButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: TButtonProps) {
  return <S.Button>{children}</S.Button>;
}

export default Button;
