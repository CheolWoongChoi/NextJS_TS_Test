import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MainContainer = styled.main``;

function Main() {
  const router = useRouter();

  const goHello = () => {
    router.push('/hello');
  };

  const goBye = () => {
    router.push('/bye');
  };

  return (
    <MainContainer
      css={css`
        overflow: auto;
        height: 100%;
      `}
    >
      <h1>main</h1>
      <div>
        <div>
          <button onClick={goHello}>go hello</button>
        </div>
        <div>
          <button onClick={goBye}>go bye</button>
        </div>
      </div>
    </MainContainer>
  );
}

export default Main;
