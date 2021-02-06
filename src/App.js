import React, { useEffect, useContext } from "react";
import Login from "./Pages/Login/Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import HomePage from "./Pages/HomePage/HomePage";
import AuthContext from "./context/Auth/authContext";

function App() {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.auth) {
      authCtx.login({ email: "admin@email.com", password: "password" });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
