import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function HelloPage({ helloData }) {
  console.log('helloData: ' + helloData);

  return (
    <div className='hello-wrapper'>
      <Head>
        <title>hello world</title>
      </Head>
      hello
      <div>
        {helloData}
      </div>
      <Link href='/'>
        <button>goMain</button>
      </Link>
    </div>
  );
}

export default HelloPage;

export function getServerSideProps(context) {
  console.log('serverside time');
  const data = Math.floor(Math.random() * 1000);

  return {
    props: {
      helloData: data,
    },
  };
}
