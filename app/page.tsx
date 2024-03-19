'use client';

// import { getServerSession } from 'next-auth';
// import Image from 'next/image';
import Link from 'next/link';
// import { authOptions } from './api/auth/[...nextauth]/route';
// import coffee from '@/public/next.svg';
import { Metadata } from 'next';

import { useState } from 'react';
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
	loading: ()=> <div>loading...</div>, // loading when component is rendering
	ssr: false, // disable server side rendering
});
// import HeavyComponent from './components/HeavyComponent';

export default function Home() {
	// const session = await getServerSession(authOptions);
	// this function works both in our pages as well as our route handlers
	// if you have an API that needs to access the current session, in that API we can call this function

	const [visible, setvisible] = useState(false);
	return (
		<main>
			{/* <h1 className="font-poppins">Hello {session && <span>{session.user!.name}</span>}</h1> */}
			<Link href="/users">users</Link>
			{/* <Image
				// src="https://bit.ly/react-cover"
				src={coffee}
				alt="image"
				width={300}
				height={170}
				sizes="100vw"
				quality={100}
				priority // for laxy loading images
			/> */}
			<button onClick={() => {
				setvisible(true)
				// const x = (await import(component name)).default;
			}}>click</button>
			{visible && <HeavyComponent />}
		</main>
	);
}

export async function generageMetadata(): Promise<Metadata> {
	const product = await fetch('');

	return {
		title: 'product.title',
		description: 'product.description',
	};
}
