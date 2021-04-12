import React from 'react';
import Link from 'next/link';
import { NextPageContext } from 'next';

function Bye({ appData, byeData }) {
	console.log('Bye PageProps');

	return (
		<div className='bye-wrapper'>
			<p style={{ color: 'red', fontSize: 30 }}>bye</p>
			<Link href='/'>
				<button>goMain</button>
			</Link>
			<div>{appData.title}, {byeData}</div>
		</div>
	);
}

export default Bye;

Bye.getInitialProps = (ctx: NextPageContext) => {
	console.log('bye getInitialProps');
	console.log(`==== ${ctx.pathname} ====`);
	console.log(ctx);

	return {
		byeData: 1
	}
}

// export function getStaticProps(context) {
// 	console.log('bye getStaticProps');
// 	console.log(context);

// 	return {
// 		props: {
// 			hi: 1
// 		}
// 	}
// }