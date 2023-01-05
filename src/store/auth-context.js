import React, { useState } from'react';

const AuthContent = React.createContext({
  token:'',
  isLoggedIn:false,
  login: ( token ) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null)
  
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token:token,
    isLoggedIn:userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };



return (
  <AuthContent.Provider> value={contextValue}>
    {props.children}
    </AuthContent.Provider>

  );
};

export default AuthContext;