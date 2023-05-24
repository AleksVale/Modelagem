import knex from 'knex'
import knexConfig from '../../knexfile'

const db = knex(knexConfig.development)
interface LoginProps {
  username: string
  password: string
}
async function LoginController({ username, password }: LoginProps) {
  const user = await db('users').where('user_name', username).first()

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
    user_name: user.user_name,
  }
}
export default LoginController
