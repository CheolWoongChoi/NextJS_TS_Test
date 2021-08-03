import React from 'react';
import Link from 'next/link';
import { PageContainer as ByePageContainer } from '@/components/layouts';
import { Button } from '@/components/common';

function ByePage({ byeData }) {
  return (
    <ByePageContainer>
      <p style={{ color: 'red', fontSize: 30 }}>bye</p>
      <Link href='/'>
        <button>goMain</button>
      </Link>
      <div>{byeData}</div>
      <Button>버튼테스트</Button>
    </ByePageContainer>
  );
}

export default ByePage;

export function getStaticProps(context) {
  console.log('build time');
  const data = Math.floor(Math.random() * 1000);

  return {
    props: {
      byeData: data,
    },
  };
}
