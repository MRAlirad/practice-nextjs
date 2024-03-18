import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

interface Props {
	params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
	// Fetch data from a db
	// If not found, return 404 error
	// Else return data

	// if (id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });
	// return NextResponse.json({ id: 1, name: 'Json' });

	//! Gettin Single User form DataBase

	// check if user exists
	const user = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});
	if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

	// return the user
	return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
	// Validate the request body
	// If invalid, return 400
	// fetch the user with given id
	// If user does't exist, return 404
	// Update the user
	// Return the updated user

	// const body = await request.json();
	// const validation = schema.safeParse(body);

	// if (!validation.success) return NextResponse.json(validation.error.errors);
	// if (!body.name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });

	// if (parseInt(id) > 10) return NextResponse.json({ error: 'User not Found' }, { status: 404 });

	// return NextResponse.json({ id: 1, name: body.name });

	//! Gettin Single User form DataBase
	const body = await request.json();

	// Validate requested body
	const validation = schema.safeParse(body);
	if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

	// Check if user exist
	const user = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});
	if (!user) return NextResponse.json({ error: 'User not Found' }, { status: 404 });

	// update the user
	const updatedUser = await prisma.user.update({
		where: { id: user.id },
		data: {
			name: body.name,
			email: body.email,
		},
	});
	return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
	// Fetch the user from db
	// If not found, return 404
	// Delete the user
	// Return 200

	// if (parseInt(id) > 10) return NextResponse.json({ error: 'User not Found' }, { status: 404 });

	// return NextResponse.json({});

	//! Delete user from database

	// Check if user exists
	const user = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});
	if (!user) return NextResponse.json({ error: 'User not Found' }, { status: 404 });

	// delete the user
	await prisma.user.delete({
		where: { id: user.id },
	});

	return NextResponse.json({});
}
