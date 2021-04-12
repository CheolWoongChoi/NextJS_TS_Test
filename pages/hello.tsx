import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function HelloPage({ cnt, setCnt }) {
	return (
		<div className='hello-wrapper'>
			<Head>
				<title>hello world</title>
			</Head>
			hello
			<div>
				cnt: {cnt}
			</div>
			<button onClick={() => setCnt(cnt => cnt+1)}>+</button>
			<div>
				<Link href='/'>
					<button>goMain</button>	
				</Link>
			</div>
		</div>
	);
}

export default HelloPage;

export function getStaticProps(context) {
  console.log('hello getStaticProps');
  console.log(context.query);
  
  return {
    props: {
      id: 1
    }
  }
}