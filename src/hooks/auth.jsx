import { createContext, useContext, useState, useEffect } from 'react'
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

  function signOut() {
    localStorage.removeItem('@rocketNotes:token')
    localStorage.removeItem('@rocketNotes:user')
    setData({})
  }

  async function updateUser({user, avatarFile}) {
    try {
      
      if(avatarFile) {
        const fileUpload = new FormData()
        fileUpload.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUpload)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@rocketNotes:user', JSON.stringify(user))
      setData({
        token: data.token,
        user
      })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to create account')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketNotes:token')
    const user = localStorage.getItem('@rocketNotes:user')

    if(token && user) {
      api.defaults.headers.common['Authorization'] = ` Bearer ${token}`
    }

    setData({
      token,
      user: JSON.parse(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, updateUser, user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth () {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }