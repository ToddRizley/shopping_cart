import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CartRow from '../components/CartRow'
// import fetchInventory from '../actions/fetchInventory'


const ShoppingCartList = class extends Component {

// componentWillMount(){
//     this.props.fetchInventory()
//   }

displayCart() {
      if (this.props.shoppingCart.shoppingCart.length > 0 ) {
        return this.props.shoppingCart.shoppingCart.map( (product) =>
          <div><CartRow currentUser={this.props.currentUser} productData={product}  /></div>
      )}
    }



  render(){
        return (
          <div> <h1> Cart </h1>
                {this.displayCart()}
          </div>

        );
      }
    }

const ShoppingCartListContainer = connect(mapStateToProps, null)(ShoppingCartList)

  function mapStateToProps(state) {
    return {shoppingCart: state.shoppingCart, currentUser: state.currentUser }
  }
  // function mapDispatchToProps(dispatch) {
  //   return  bindActionCreators({fetchInventory}, dispatch)
  // }

export default ShoppingCartListContainer;
