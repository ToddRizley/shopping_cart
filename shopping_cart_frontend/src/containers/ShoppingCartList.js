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
      return <div>Total: ${totalPrice.toFixed(2)}</div>
    }



  render(){
        return (
          <div>
            <h1 id="cart">Cart</h1>
            <table className="table2">
                {this.displayCart()}
                {this.cartTotal()}
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
