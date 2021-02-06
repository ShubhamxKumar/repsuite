import React, { useReducer } from "react";
import { AUTH_ERROR, CLEAR_ERR, LOGIN, LOGOUT, SET_LOADING } from "../types";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    loading: false,
    isAuthenticated: false,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //For turning loading on/off
  const setLoading = (value) => {
    dispatch({ type: SET_LOADING, payload: value });
  };

  //for login
  const login = (creds) => {
    setLoading(true);
    if (creds.email === "admin@email.com" && creds.password === "password") {
      dispatch({ type: LOGIN, payload: creds });
    } else {
      dispatch({ type: AUTH_ERROR, payload: "INVALID CREDENTIALS." });
    }
  };

  //for logout
  const logout = () => {
    setLoading(true);
    dispatch({ type: LOGOUT });
  };

  //for clearing errors
  const clearErr = () => {
    setLoading(true);
    dispatch({ type: CLEAR_ERR });
  };
  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        setLoading,
        login,
        logout,
        clearErr,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
