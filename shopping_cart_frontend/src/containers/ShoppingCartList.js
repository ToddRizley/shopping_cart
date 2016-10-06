import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartRow from '../components/CartRow'


const ShoppingCartList = class extends Component {


  displayCart() {
      if (this.props.shoppingCart.shoppingCart.length > 0 ) {
        return this.props.shoppingCart.shoppingCart.map( (product) =>
        <CartRow currentUser={this.props.currentUser} productData={product} />
      )}
    }

    cartTotal(){
      var totalPrice = 0
      if (this.props.shoppingCart.shoppingCart.length > 0 ) {
          this.props.shoppingCart.shoppingCart.map( (product) => {
          let title = Object.keys(product)[0]
          totalPrice+= (product[title].quantity * product[title].price)
        }
      )}
      return <tr>Total: ${totalPrice.toFixed(2)}</tr>
    }



  render(){
      return (
        <div className="table2">
          <h1 id="cart">Cart</h1>
          <table >
            <tbody>
              {this.displayCart()}
              {this.cartTotal()}
            </tbody>
          </table>
        </div>
        );
      }
    }

const ShoppingCartListContainer = connect(mapStateToProps, null)(ShoppingCartList)

  function mapStateToProps(state) {
    return {shoppingCart: state.shoppingCart, currentUser: state.currentUser }
  }

export default ShoppingCartListContainer;
