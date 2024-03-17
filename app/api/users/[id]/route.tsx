import { NextRequest, NextResponse } from 'next/server';

interface Props {
	params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
	// Fetch data from a db
	// If not found, return 404 error
	// Else return data

	if (id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });
	return NextResponse.json({ id: 1, name: 'Json' });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
	// Validate the request body
	// If invalid, return 400
	// fetch the user with given id
	// If user does't exist, return 404
	// Update the user
	// Return the updated user

	const body = await request.json();

	if (!body.name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });

	if (id > 10) return NextResponse.json({ error: 'User not Found' }, { status: 404 });

	return NextResponse.json({ id: 1, name: body.name });
}
