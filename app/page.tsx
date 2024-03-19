import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
	const session = await getServerSession(authOptions);
	// this function works both in our pages as well as our route handlers
	// if you have an API that needs to access the current session, in that API we can call this function

	return (
		<main>
			<h1>Hello {session && <span>{session.user!.name}</span>}</h1>
			<Link href="/users">users</Link>
		</main>
	);
}
