import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import addProductToInventory from '../actions/addProductToInventory'
import NavBar from './NavBar'

const Form = class extends Component {

  handleFormSubmit(event){
    event.preventDefault()
    var product = {title: this.refs.title.value, price: this.refs.price.value, quantity: this.refs.quantity.value}
    if (this.validateAllInputs(product)){
      this.props.addProductToInventory(product)
      this.refs.form.reset()
    } else {
      alert("Invalid Entry")
      this.refs.form.reset()
    }
  }

  validateTitle(product){
    if ( product.title !== "" && typeof(product.title) === "string" ){
      return true
    } else {
      return false
    }
  }

  validatePrice(product){
    var regex = /^\d*(.\d{2})?$/;
    if ( product.price !== "" && typeof(parseFloat(product.price)) === "number" && parseFloat(product.price) > 0  && regex.test(product.price)  ){
      return true
    } else {
      return false
    }
  }

  validateQuantity(product){
    if ( product.quantity !== "" && typeof(parseInt(product.quantity)) === "number" && parseInt(product.quantity) > 0  ){
      return true
    } else {
      return false
    }
  }

  validateAllInputs(product){
    if (this.validatePrice(product) && this.validateTitle(product) && this.validateQuantity(product)){
      return true
    } else {
      return false
    }
  }


  render(){
        return (
        <div>
          <NavBar />
          <center>
            <form onSubmit={this.handleFormSubmit.bind(this)} ref="form">
                <h1>Add a Product To Store </h1>
                <label>Title</label>
                <input type="text" className="entry-input" ref="title" />
                <label>Price</label>
                <input type="text" className="entry-input" ref="price" />
                <label>Quantity</label>
                <input type="number" className="entry-input" ref="quantity" />
                <button className="button_product" type="submit">Add Product</button>
            </form>
          </center>
        </div>
        );
      }
    }
const AddProductForm = connect(null, mapDispatchToProps)(Form)

    function mapDispatchToProps(dispatch) {
      return  bindActionCreators({addProductToInventory}, dispatch)
    }
export default AddProductForm;
