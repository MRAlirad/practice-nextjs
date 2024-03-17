import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
	// if we remove the request parameter, NextJS will cash the result of this response
	// to prevent caching we should write request parameter
	return NextResponse.json([
		{ id: 1, name: 'Json' },
		{ id: 2, name: 'John' },
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	// Validate
	// if invalid, return 400
	// Else, return
	if (!body.name) return NextResponse.json({ error: 'Name is Required' }, { status: 400 });
	return NextResponse.json({
		id: 1,
		name: body.name,
	}, {status: 201});
}
