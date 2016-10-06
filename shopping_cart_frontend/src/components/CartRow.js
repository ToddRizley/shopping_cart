import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import removeItemFromCart from '../actions/removeItemFromCart'


const Row= class extends Component {

    handleClick(event){
      event.preventDefault()
      this.props.removeItemFromCart(this.props.productData, this.props.currentUser.currentUser)
    }

    displayCartRow(){
      var title = Object.keys(this.props.productData)[0]
      var product = (this.props.shoppingCart.shoppingCart.find((obj)=> {if( Object.keys(obj)[0] === title ) { return obj } }))
          return (
            <tr>
              <td><strong>{ title }</strong></td>
              <td>{ " $"+ parseFloat(product[title].price).toFixed(2) }</td>
              <td>{ " " + product[title].quantity + " item(s)" }</td>
              <td><button className="button_product" onClick={this.handleClick.bind(this)} > Remove Items From Cart </button></td>
            </tr>
          );
        }

  render(){
    return(
      <div>
        {this.displayCartRow()}
      </div>
        );
      }
    }
    const CartRow = connect(mapStateToProps, mapDispatchToProps)(Row)

    function mapDispatchToProps(dispatch) {
      return  bindActionCreators({removeItemFromCart}, dispatch)
    }
    function mapStateToProps(state) {
      return { inventory: state.inventory, shoppingCart: state.shoppingCart }
    }


export default CartRow;
