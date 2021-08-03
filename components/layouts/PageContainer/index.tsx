import React from 'react';
import S from './styles';

type TPageContainer = {
  children?: React.ReactNode;
};

function PageContainer({ children }: TPageContainer) {
  return <S.PageContainer>{children}</S.PageContainer>;
}

export default PageContainer;
