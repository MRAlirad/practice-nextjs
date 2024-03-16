import React, { Suspense, use } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
	searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
	return (
		<>
			<h1>Users</h1>
			{/* <Suspense fallback={<p>Loading ...</p>}> */}
				<UserTable sortOrder={sortOrder} />
			{/* </Suspense> */}
			<Link href="/users/new"> New User </Link>
		</>
	);
};

export default UsersPage;
