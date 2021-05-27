import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const ByeContainer = styled.div`

`;

function Bye({ byeData }) {
	console.log('byeData: ' + byeData);
	
	return (
		<ByeContainer>
			<p style={{ color: 'red', fontSize: 30 }}>bye</p>
			<Link href='/'>
				<button>goMain</button>
			</Link>
			<div>{byeData}</div>
			<div>

			</div>
		</ByeContainer>
	);
}

export default Bye;

export function getStaticProps(context) {
	console.log('build time');
	const data = Math.floor(Math.random() * 1000);

	return {
		props: {
			byeData: data
		}
	}
}