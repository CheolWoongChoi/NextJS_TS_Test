import React from 'react';
import { PageContainer } from '@/components/layouts';

function HelloPage({ helloData }) {
  return (
    <PageContainer>
      <div>
        <p>data</p>
        <p>
          <b>{helloData}</b>
        </p>
      </div>
    </PageContainer>
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
