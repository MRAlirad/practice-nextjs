import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
	// if we remove the request parameter, NextJS will cash the result of this response
	// to prevent caching we should write request parameter
	return NextResponse.json([
		{ id: 1, name: 'Json' },
		{ id: 2, name: 'John' },
	]);
}
