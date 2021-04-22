import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { RootState } from '../store';

const fetcher = async (...args: [string, any]) => {
  const res = await fetch(...args);
  return res.json();
}

const red = css`
  color: red;
`;

const blue = css`
  color: blue;
`;

// styled component
const MainContainer = styled.main`
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px;
  background-color: yellow;
  font-size: 20px;
  color: purple;

  ${(props) => props.primary && `
    color: blue;
    font-size: 25px;
  `}

  &:hover {
    color: orange;
  }
`;

const CustomP = styled.p`
  padding: 20px 0;
  color: red;
  font-weight: bold;
`;

const CustomDiv = styled.div`
  border: solid 2px blue;
  padding: 10px;

  & p {
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 375px) {
      font-size: 10px;
    }
  }

  & ${CustomP} {
    background-color: blue;
    color: black;
  }
`

function Main(props) {
  const router = useRouter();
  // const { item } = useSelector((state: RootState) => state.app);

  const goHello = () => {
    router.push('/hello');
  }
  
  const goBye = () => {
    router.push('/bye');
  }

  const handleHello = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();

    console.log(data);
  }

  return (
    <MainContainer 
      /* css={css`
      overflow: auto;
      height: 100%;
    `} */>
      <Head>
        <title>Index</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
        <h1>
          main
        </h1>
        <div>
          <h1>redux data</h1>
          {/* <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.content}</p> */}
        </div>
        <div>
          <h2>buttons</h2>
          <div>
            <button onClick={goHello}>
              go hello
            </button>
          </div>
          <div>
            <button onClick={goBye}>
              go bye
            </button>
          </div>
        </div>
        {/* <div>
          <h2>emotionjs test</h2>
          <p css={red}>red text</p>
          <p css={blue}>blue text</p>
          <CustomDiv>
            <div>
              <Button>
                Button Comp text
              </Button>
            </div>
            <div css={css`
              margin-top: 10px;
            `}>
              <Button 
                primary
                onClick={handleHello}
              >
                hello api
              </Button>
            </div>
            <CustomP>
              CustomP Comp text
            </CustomP>
          </CustomDiv>
        </div> */}
    </MainContainer>
  );
}

export default Main;