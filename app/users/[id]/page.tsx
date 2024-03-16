import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
	params: { id: number };
}

interface User {
	id: number;
	name: string;
	email: string;
}

const USerDetailPage = async ({ params: { id } }: Props) => {
	if (id > 10) notFound();
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const user: User = await res.json();


	return <div>USerDetailPage {user.name}</div>;
};

export default USerDetailPage;
