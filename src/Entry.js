import React from "react";
import AuthState from "./context/Auth/authState";
import App from "./App";

function Entry() {
  return (
    <AuthState>
      <App />
    </AuthState>
  );
}

export default Entry;
