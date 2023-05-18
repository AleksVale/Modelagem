import NextAuth from 'next-auth'
import Login from '@/Controllers/login'
const options = {
  providers: [],
  adapter: Login as any,
}

export default (req, res) => NextAuth(req, res, options)
