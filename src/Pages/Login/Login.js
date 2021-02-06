import React, { useContext, useEffect } from "react";
import "./login.css";
import login_img from "../../assets/login_img.png";
import AuthContext from "../../context/Auth/authContext";
import LoginForm from "../../Components/LoginForm/LoginForm";

function Login(props) {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (authCtx.isAuthenticated && !authCtx.loading) {
      props.history.push("/");
    }
    //eslint-disable-next-line
  }, [authCtx.isAuthenticated, authCtx.loading]);
  const onLogin = (email, password) => {
    console.log("logn attempted.");
    authCtx.login({ email: email, password: password });
  };
  return (
    <div id="login_main_container">
      <div id="left_div">
        <div id="header">
          <h1>
            {" "}
            <b> Rep </b>{" "}
          </h1>
          <h1 style={{ color: "#526CE4" }}>
            {" "}
            <b>suite.</b>{" "}
          </h1>
        </div>
        <LoginForm onLogin={onLogin} />
        <div id="temp_div"></div>
      </div>
      <div id="right_div">
        <img src={login_img} alt="login_img" id="login_img" />
        <div id="features">
          <h5 align="center">
            {" "}
            <i className="fa fa-comment" style={{ color: "white" }}></i> Fully
            Automated Comments Moderation.
          </h5>
          <h5 align="center">
            {" "}
            <i className="fa fa-retweet" style={{ color: "white" }}></i> Fully
            Take a backseat while we automate your repo.
          </h5>
          <h5 align="center">
            {" "}
            <i
              className="fa fa-dollar-sign"
              style={{ color: "white" }}
            ></i>{" "}
            Fully Start with a free trial.
          </h5>
          <h5 align="center">
            {" "}
            <i className="fa fa-thumbs-up" style={{ color: "white" }}></i> Fully
            Best SAAS in the industry.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
