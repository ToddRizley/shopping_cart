import React, { Component } from 'react';
import InventoryListContainer from './InventoryList'
import ShoppingCartListContainer from './ShoppingCartList'


class ShoppingContainer extends Component {
  render() {
    return (
      <div >
        <InventoryListContainer /> |||| <ShoppingCartListContainer />
      </div>
    );
  }
}

export default ShoppingContainer;
