import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // any get or post request has sent to this endpoint will be handled inside this handler function
