import Head from 'next/head';
import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.css';
import fetch from 'unfetch';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

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
const Button = styled.button`
  padding: 10px;
  background-color: yellow;
  font-size: 20px;
  color: purple;

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
`


export default function Main(pro) {
  const router = useRouter();

  console.log('index PageProps');
  console.log(pro);

  const goHello = () => {
    router.push('/hello');
  }
  const goBye = () => {
    router.push('/bye');
  }

  return (
    <div>
      <Head>
        <title>Hi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main2'>
        main
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
        <div>
          <h1>data test</h1>
          <p css={red}>red text</p>
          <p css={blue}>blue text</p>
          <CustomDiv>
            <Button>
              Button Comp text
            </Button>
            <CustomP>
              CustomP Comp text
            </CustomP>
          </CustomDiv>
        </div>
      </main>
    </div>
  );
}
