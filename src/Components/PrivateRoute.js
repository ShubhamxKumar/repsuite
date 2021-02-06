import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../context/Auth/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  const authCtx = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authCtx.loading && authCtx.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
