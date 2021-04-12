import React from 'react';
import Link from 'next/link';

function Error404Page() {
	return (
		<div>
			404Page
			<p>
				<Link href='/'>
					<a>
						<button>
							goMain
						</button>
					</a>
				</Link>
			</p>
		</div>
	);
}

export default Error404Page;