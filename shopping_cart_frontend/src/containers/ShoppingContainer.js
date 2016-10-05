import React, { Component } from 'react';
import InventoryListContainer from './InventoryList'
import ShoppingCartListContainer from './ShoppingCartList'
import NavBar from '../components/NavBar'


class ShoppingContainer extends Component {
  render() {
    return (
      <div className="shopping_container" >
        <NavBar />
        <InventoryListContainer className="inventory_container" />
        <ShoppingCartListContainer className="cart_container" />
      </div>
    );
  }
}

export default ShoppingContainer;
