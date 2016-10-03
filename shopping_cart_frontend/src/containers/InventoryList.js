import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductRow from '../components/ProductRow'
import fetchInventory from '../actions/fetchInventory'


const InventoryList = class extends Component {

componentWillMount(){
    this.props.fetchInventory()
  }

displayInventory () {
      if (this.props.inventory) {
        return this.props.inventory.inventory.map( (product) =>
          <div><ProductRow currentUser={this.props.currentUser} productData={product}  /></div>
      )}
    }



  render(){
        return (
          <div> <h1> Inventory </h1>
                {this.displayInventory()}
          </div>

        );
      }
    }
const InventoryListContainer = connect(mapStateToProps, mapDispatchToProps)(InventoryList)

  function mapStateToProps(state) {
    return {inventory: state.inventory, currentUser: state.currentUser }
  }
  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({fetchInventory}, dispatch)
  }

export default InventoryListContainer;
