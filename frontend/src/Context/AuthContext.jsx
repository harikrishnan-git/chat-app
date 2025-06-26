import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("chat-user"));
      console.log("Auth user from localStorage:", stored.data);
      return stored ? stored.data : null;
    } catch (error) {
      console.error("Error parsing authUser from localStorage:", error);
      return null;
    }
  });
  console.log("Initial authUser state:", authUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
