import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
	return NextResponse.json([
		{ id: 1, name: 'Json' },
		{ id: 2, name: 'John' },
	]);
}
