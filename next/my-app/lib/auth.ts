import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';

export const {
  handlers: { GET, POST },
  auth,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.AUTH_NAVER_ID as string,
      clientSecret: process.env.AUTH_NAVER_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET as string,
});
