import { useState } from 'react';
import { NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import store from '../store';
// import wrapper from '../store';

function App({ Component, pageProps }: AppProps & { test: string }) {
  const [cnt, setCnt] = useState(0);

  // 공통 레이아웃
  return (
    <>
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
      <Provider store={store}>
        <Component 
          cnt={cnt}
          setCnt={setCnt}
          {...pageProps} 
          />
      </Provider>
    </>
  );
}

export default App;
// export default wrapper.withRedux(App);

// App.getInitialProps = async (context) => {
//   const { Component, ctx } = context;
  
//   console.log('app getInitialProps');
//   console.log(`==== ${ctx.pathname} ====`);
//   console.log(context);

//   let pageProps = {};

//   // 하위 컴포넌트에 getInitialProps가 있다면 추가 (각 개별 컴포넌트에서 사용할 값 추가)
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   // _app에서 props 추가 (모든 컴포넌트에서 공통적으로 사용할 값 추가)
//   pageProps = { ...pageProps, appData: { title: 11111, content: 3333 } };

//   return { pageProps };
// };


// export function getStaticProps(context: any) {
//   console.log('app getStaticProps');

//   return {

//   };
// }