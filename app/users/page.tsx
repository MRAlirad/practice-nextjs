import React, { use } from 'react';

interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		cache: 'no-store', // if Data changes frequently
		// next: {
		// 	revalidate: 10 // get fresh data every 10 seconds
		// }
	});
	console.log(res);
	const users: User[] = await res.json();

	return (
		<>
			<h1>Users</h1>
			<p>{new Date().toLocaleTimeString()}</p>
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UsersPage;
