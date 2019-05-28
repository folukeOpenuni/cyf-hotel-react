import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: 0
    };
  }
  addOrder = () => {
    this.setState(previousState => {
      return {
        Orders: previousState.Orders + 1
      };
    });
  };

  RemoveOrder = () => {
    this.setState(previousState => {
      return {
        Orders: previousState.Orders - 1
      };
    });
  };

  resetOrder = () => {
    this.setState(previousState => {
      return {
        Orders: 0
      };
    });
  };

  render() {
    return (
      <div>
        <li>
          Pizza: {this.state.Orders}
          <RestaurantButton handler={this.addOrder} buttonName="Add" />
          <RestaurantButton handler={this.RemoveOrder} buttonName="Remove" />
          <RestaurantButton
            handler={this.resetOrder}
            buttonName="Reset Order"
          />
        </li>
      </div>
    );
  }
}

export default Order;
