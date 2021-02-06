import React from "react";
import "./pcitem.css";

function PcItems(props) {
  return (
    <div className="pc_items">
      <input
        type="checkbox"
        name="ticked"
        className="ticked"
        value={props.ticked}
      />
      <h3 className="item_heading"> {props.name} </h3>
      <i className={props.class + " item_icon"}></i>
    </div>
  );
}

export default PcItems;
