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
          <div><ProductRow productData={product}  /></div>
      )}
    }

  handleSubmit(event){
    event.preventDefault()
  }

  render(){
        return (
          <div> <h1> Inventory </h1>
                {this.displayInventory()}
                <button type="submit" onSubmit={this.handleSubmit.bind(this)}> Add Items to Cart </button>
          </div>

        );
      }
    }
const InventoryListContainer = connect(mapStateToProps, mapDispatchToProps)(InventoryList)

  function mapStateToProps(state) {
    return {inventory: state.inventory}
  }
  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({fetchInventory}, dispatch)
  }

export default InventoryListContainer;
