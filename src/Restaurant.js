import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
