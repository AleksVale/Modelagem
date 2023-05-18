import knex from 'knex'
import knexConfig from '../../knexfile'

const db = knex(knexConfig.development)
interface LoginProps {
  email: string
  password: string
}
async function Login({ email, password }: LoginProps) {
  const user = await db('users').where('email', email).first()

  if (!user) {
    throw new Error('Invalid credentials')
  }

  const passwordValid = password === user.password

  if (!passwordValid) {
    throw new Error('Invalid credentials')
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  }
}

export default Login
