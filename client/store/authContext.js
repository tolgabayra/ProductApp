import { createContext, useEffect, useState } from "react";
import { appAxios } from "../utils/appAxios"
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

  useEffect(() => {
    appAxios.get(`/auth/me/${localStorage.getItem("user_id")}`,{withCredentials: true})
    .then((res) => {
      setUser(true)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])


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