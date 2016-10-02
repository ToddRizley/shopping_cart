import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductRow from '../components/ProductRow'
import fetchInventory from '../actions/fetchInventory'
import addToShoppingCart from '../actions/addToShoppingCart'

const InventoryList = class extends Component {

componentWillMount(){
    this.props.fetchInventory()
  }

displayInventory () {
      if (this.props.inventory) {
        return this.props.inventory.inventory.map( (product) =>
          <div><ProductRow productData={product}  /></div>
      )}
    }

  handleSubmit(event){
    event.preventDefault()
    debugger
    this.props.addToShoppingCart()
      console.log("here")
      // this.props.updateInventory()

  }

  render(){
        return (
          <div> <h1> Inventory </h1>
            <form onSubmit={this.handleSubmit.bind(this)} ref="form">
                {this.displayInventory()}
                <button type="submit" > Add Items to Cart </button>
                </form>
          </div>

        );
      }
    }
const InventoryListContainer = connect(mapStateToProps, mapDispatchToProps)(InventoryList)

  function mapStateToProps(state) {
    return {inventory: state.inventory, shoppingCart: state.shoppingCart}
  }
  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({fetchInventory, addToShoppingCart}, dispatch)
  }

export default InventoryListContainer;
