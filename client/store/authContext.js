import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
    user: false,
    login: ()=>{},
    logout: ()=>{}

})

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    setUser(user)  
  },[user])


  const login = () => {
    setUser(true)
  }
  const logout = () => {
    setUser(false)
  }
  const context = {user, login, logout}

  return(
    <AuthContext.Provider value={context}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext