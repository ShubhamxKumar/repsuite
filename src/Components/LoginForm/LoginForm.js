import React, { useState } from "react";
import "./loginform.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div id="login_form">
      <div id="login_form_header">
        <h1 align="center"> Hey There</h1>
        <div id="login_form_tagline">
          <h4 align="center"> Welcome back to Rep </h4>
          <h4 style={{ color: "#526CE4" }}>suite.</h4>
        </div>
      </div>
      <div id="login_form_body">
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          className="creds_input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          className="creds_input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p id="password_advice" align="center">
          {" "}
          Use 8 or more charachters to make a strong password.{" "}
        </p>
        <button
          id="submit_btn"
          onClick={(e) => {
            e.preventDefault();
            props.onLogin(email, password);
          }}
        >
          {" "}
          Sign in{" "}
        </button>
        <p id="password_advice" align="center">
          {" "}
          New User? <a href="/login"> Signup instead. </a>{" "}
        </p>
        <hr />
        <p id="password_advice" align="center">
          {" "}
          Or continue with{" "}
        </p>
        <div id="alt_login_div">
          <button className="alt_login_btn">
            {" "}
            <i className="fa fa-facebook"></i>{" "}
          </button>
          <button className="alt_login_btn">
            {" "}
            <i className="fa fa-google"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
