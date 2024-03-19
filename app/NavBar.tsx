'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
	const { status, data: session } = useSession();

	return (
		<div className="flex bg-slate-200 p-5">
			<Link
				href="/"
				className="mr-5"
			>
				Nextjs
			</Link>
			<Link
				href="/users"
				className="mr-5"
			>
				Users
			</Link>
			<div className="ml-auto">
				{status === 'loading' && (
					<span className="loading loading-spinner loading-md"></span>
				)}
				{status === 'authenticated' && <span>{session.user!.name}</span>}
				{status === 'unauthenticated' && (
					<Link
						href="/api/auth/signin"
						className="ml-auto"
					>
						Signin
					</Link>
				)}
			</div>
		</div>
	);
};

export default NavBar;
