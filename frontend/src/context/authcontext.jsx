import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const initialUser = localStorage.getItem("user");
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
