import { createContext, useCallback, useMemo, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const MY_AUTH_APP = "MY_AUTH_APP";

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(window.localStorage.getItem(MY_AUTH_APP));

  const login = useCallback(() => {
    window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuth(true);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH_APP, true);
    setIsAuth(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuth,
    }),
    [login, logout, isAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
    children: PropTypes.object,
};

export default AuthContextProvider;
