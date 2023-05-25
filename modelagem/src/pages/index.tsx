import { getSession, signIn, signOut } from 'next-auth/react'
import router from 'next/router'
import { useCallback } from 'react'
import { Session } from '@/Types/generalTypes'

export default function Home(session: Session) {
  const handleSignIn = useCallback(() => {
    signIn()
  }, [])
  const handleSignOut = useCallback(() => {
    signOut()
    router.push('/Login') // Redirect to the login page after logout
  }, [])
  return (
    <div>
      {session ? (
        <button
          onClick={handleSignOut}
          type="button"
          className="px-4 py-2 mt-6 rounded-lg bg-red-600"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          type="button"
          className="px-4 py-2 mt-6 rounded-lg bg-red-600"
        >
          Login
        </button>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: session.user,
    },
  }
}
