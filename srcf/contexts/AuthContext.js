import { createContext, useEffect, useState, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const sub = authUser?.attributes?.sub;

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser({ bypassCache: true });
        setAuthUser(user);
      } catch (error) {
        console.error("Error authenticating user:", error);
      }
    };

    fetchAuthUser();
  }, []);

  useEffect(() => {
    const fetchDbUser = async () => {
      if (sub) {
        try {
          const users = await DataStore.query(User, (user) => user.sub("eq", sub));
          setDbUser(users[0]);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchDbUser();
  }, [sub]);

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
