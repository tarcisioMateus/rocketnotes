import { createContext, useContext, useState } from 'react'
import { api } from '../services'

const AuthContext = createContext({})

function AuthProvider( { children } ) {
  const [data, setData] = useState({})

  async function signIn({email, password}) {
    try {
      const response = await api.post('/sessions', {email, password})
      const { token, user } = response.data

      api.defaults.headers.common['Authorization'] = ` Bearer ${token}`
      localStorage.setItem('@rocketNotes:token', token)
      localStorage.setItem('@rocketNotes:user', JSON.stringify(user))
      setData({ token, user })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to create account')
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth () {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }