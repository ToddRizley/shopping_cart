import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import addProductToInventory from '../actions/addProductToInventory'


const Form = class extends Component {

  handleFormSubmit(event){
    event.preventDefault()
    var product = {title: event.target[0].value, price: event.target[1].value, quantity: event.target[2].value}
    debugger
    if (this.validateAllInputs(product)){
      this.props.addProductToInventory(product)
    } else {
      alert("invalid entry")
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
          <center>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <h1>Add a Product To Store </h1>
                <label>Title</label>
                <input type="text" className="entry-input" id="title" />
                <label>Price</label>
                <input type="text" className="entry-input" id="price" />
                <label>Quantity</label>
                <input type="number" className="entry-input" id="quantity" />
                <button type="submit">Submit</button>
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
