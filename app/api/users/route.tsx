import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
	// if we remove the request parameter, NextJS will cash the result of this response
	// to prevent caching we should write request parameter
	// return NextResponse.json([
	// 	{ id: 1, name: 'Json' },
	// 	{ id: 2, name: 'John' },
	// ]);

	//! Get users from DataBase
	const users = await prisma.user.findMany();
	return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
	// const body = await request.json();
	// Validate
	// if invalid, return 400
	// Else, return
	// const validation = schema.safeParse(body);
	// if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
	// if (!body.name) return NextResponse.json({ error: 'Name is Required' }, { status: 400 });
	// return NextResponse.json(
	// 	{
	// 		id: 1,
	// 		name: body.name,
	// 	},
	// 	{ status: 201 }
	// );

	//! Creating a User in DataBase
	const body = await request.json();
	
	// Validate requested body
	const validation = schema.safeParse(body);
	if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

	// Check if email already exists
	const user = await prisma.user.findUnique({
		where: {
			email: body.email,
		},
	});
	if (user) return NextResponse.json({ error: 'User already exists' }, { status: 400 });

	// create new user
	const newUser = await prisma.user.create({
		data: {
			name: body.name,
			email: body.email,
		},
	});
	return NextResponse.json(newUser, { status: 201 });
}
