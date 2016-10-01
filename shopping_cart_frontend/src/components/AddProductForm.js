import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import addProductToInventory from '../actions/addProductToInventory'


const Form = class extends Component {

  handleFormSubmit(event){
    event.preventDefault()
    var product = {title: event.target[0].value, price: event.target[1].value, quantity: event.target[2].value}
    debugger
    this.props.addProductToInventory(product)
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
