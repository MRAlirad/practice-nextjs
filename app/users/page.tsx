import React, { use } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
	searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
	return (
		<>
			<h1>Users</h1>
			<UserTable sortOrder={sortOrder} />
			<Link href="/users/new"> New User </Link>
		</>
	);
};

export default UsersPage;
