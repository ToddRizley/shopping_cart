import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import addToShoppingCart from '../actions/addToShoppingCart'

const Row= class extends Component {
  constructor(props) {
      super(props)
      this.state = { hidden: false }
    }

    toggleState(){
      var title = Object.keys(this.props.productData)[0]
      var inventoryQuant = this.props.productData[title].quantity
      var productInfo = (this.props.shoppingCart.shoppingCart.find((obj)=> {if( Object.keys(obj)[0] === title ) { return obj } }))
      var productQuant = (()=> {
        if (productInfo === undefined){
          return 0
        } else {
          return productInfo[title].quantity
        }
      })()
      if (inventoryQuant <= productQuant + 1){
      this.setState({
        hidden: true,
        color: "grey"
      })} else {
        this.setState({
          hidden: false
        })
      }
    }




    handleClick(event){
      event.preventDefault()
      debugger
      this.toggleState()
      this.props.addToShoppingCart(this.props.productData, this.props.currentUser.currentUser)

    }


  render(){

    var title = Object.keys(this.props.productData)[0]
     var inventoryQuant = this.props.productData[title].quantity
     var productInfo = (this.props.shoppingCart.shoppingCart.find((obj)=> {if( Object.keys(obj)[0] === title ) { return obj } }))
     var productQuant = (()=> {
       if (productInfo === undefined){
         return 0
       } else {
         return productInfo[title].quantity
       }
     })()
        return (
          <div>
          <strong>{ Object.keys(this.props.productData)[0] }</strong> |
            { " $"+ this.props.productData[title].price } |
            { " " + inventoryQuant - productQuant  + " item(s) left in stock" }
            <button onClick={this.handleClick.bind(this)} hidden={this.state.hidden}> Add To Cart </button>
          </div>
        );
      }
    }
    const ProductRow = connect(mapStateToProps, mapDispatchToProps)(Row)

    function mapDispatchToProps(dispatch) {
      return  bindActionCreators({addToShoppingCart}, dispatch)
    }
    function mapStateToProps(state) {
      return { inventory: state.inventory, shoppingCart: state.shoppingCart }
    }


export default ProductRow;
