import React from 'react';
import Link from 'next/link';
import { ByeContainer } from './styles';
import Button from '../../components/Button';

function Bye({ byeData }) {
  console.log('byeData: ' + byeData);

  return (
    <ByeContainer>
      <p style={{ color: 'red', fontSize: 30 }}>bye</p>
      <Link href='/'>
        <button>goMain</button>
      </Link>
      <div>{byeData}</div>
      <Button>버튼테스트</Button>
    </ByeContainer>
  );
}

export default Bye;

export function getStaticProps(context) {
  console.log('build time');
  const data = Math.floor(Math.random() * 1000);

  return {
    props: {
      byeData: data,
    },
  };
}
