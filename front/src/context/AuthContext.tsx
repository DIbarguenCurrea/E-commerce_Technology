'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps, AuthProviderProps } from "./helpers/Helpers";

const AuthContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => { }
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const userToken = localStorage.getItem('token')
    if (userToken) {
      setToken(userToken)
      // console.log(userToken)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);