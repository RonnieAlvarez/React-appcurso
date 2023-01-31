/**
 * It creates a context object, and then returns a provider component and a hook to access the value of
 * the context
 * @returns The value of the AuthContext.Provider
 */
import React, {useContext} from 'react'

const AuthContext = React.createContext()

export function AuthProvider({children, value}) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}