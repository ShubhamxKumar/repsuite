import React, { useContext, useState, useEffect, Fragment } from "react";
import "./homepage.css";
import AuthContext from "../../context/Auth/authContext";
import Navbar from "../../Components/Navbar/Navbar";
import PcItems from "../../Components/PCItems/PcItems";

function HomePage() {
  const authCtx = useContext(AuthContext);
  const channels = [
    {
      name: "Rachna Ranande",
      class: "fa fa-youtube",
      ticked: true,
    },
    {
      name: "Rachna_ranande3",
      class: "fa fa-instagram",
      ticked: true,
    },
    {
      name: "Rachna Ranande",
      class: "fa fa-facebook",
      ticked: false,
    },
    {
      name: "Rachna_ranande3",
      class: "fa fa-instagram",
      ticked: true,
    },
  ];
  return (
    <Fragment>
      <Navbar />
      <div id="home_main_page_container">
        <div id="left_container">
          <div id="pages_channel_div">
            <h1 className="pc_heading"> Pages and Channel </h1>
            {channels.map((c) => {
              return (
                <PcItems ticked={c.ticked} name={c.name} class={c.class} />
              );
            })}
            <h1 className="pc_heading"> Status </h1>
          </div>
          <div id="plan_usage_div"></div>
        </div>
        <div id="center_container"></div>
        <div id="right_container"></div>
      </div>
    </Fragment>
  );
}

export default HomePage;
