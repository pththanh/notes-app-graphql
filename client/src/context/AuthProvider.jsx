import React, { useState, createContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigation } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigation();

  const auth = getAuth();

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      console.log("[From AuthProvider]", { user });
      if (user?.uid) {
        setUser(user);
        localStorage.setItem("accessToken", user.accessToken);
      }

      setUser({});
      localStorage.clear();
      navigate("/login");
    });

    return () => {
      unsubcribed();
    };
  }, [auth, navigate]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
