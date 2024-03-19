import NextAuth from "next-auth/next";

const handler = NextAuth({});

export {handler as GET, handler as POST}; // any get or post request has sent to this endpoint will be handled inside this handler function