import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextApiRequest, NextApiResponse } from 'next'
const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: {
          label: 'username',
          type: 'string',
          placeholder: 'username',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        })
        const user = await res.json()
        if (user) {
          return user
        } else return null
      },
    }),
  ],
  pages: {
    signIn: '/Login',
    error: '/Login',
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // Session max age in seconds (30 days)
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    secret: 'your-new-jwt-secret',
    maxAge: 30 * 24 * 60 * 60, // JWT max age in seconds (30 days)
  },
}

export default (req: NextApiRequest, res: NextApiResponse<String>) =>
  NextAuth(req, res, options)
