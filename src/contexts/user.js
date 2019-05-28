import React, { useState, useEffect } from "react" 

export const UserContext = React.createContext()

export const UserContextProvider = props => {
  const [user, setUser] = useState()

  const authenticateUser = token => {
    // Call API
    console.log('Authenticating with token:', token)
    if (token === 'password') {
      window.localStorage.setItem('token', token)
      setUser('admin')
    }
  }

  const deauthenticateUser = _ => {
    console.log('Deauthenticating user')
    window.localStorage.removeItem('token') 
    setUser()
  }

  useEffect(() => {
    if(window.localStorage.token === 'password') {
      setUser('admin')
    }
  }, [user])

  return (
    <UserContext.Provider value={{
      user,
      authenticateUser,
      deauthenticateUser
    }}>
    {props.children}
  </UserContext.Provider>
  )}
