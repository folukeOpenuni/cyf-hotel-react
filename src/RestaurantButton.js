import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.handler}>
      {props.buttonName}
    </button>
  );
};

export default RestaurantButton;
