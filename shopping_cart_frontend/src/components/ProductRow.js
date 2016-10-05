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
        hidden: true
      })} else {
        this.setState({
          hidden: false
        })
      }
    }




    handleClick(event){
      event.preventDefault()
      this.toggleState()
      this.props.addToShoppingCart(this.props.productData, this.props.currentUser.currentUser)

    }
  toggleVisibility(){
    this.setState({
      hidden: !this.state.hidden
    })
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
          <tr>
            <td><strong>{ Object.keys(this.props.productData)[0] }</strong></td>
            <td>{ " $"+ parseFloat(this.props.productData[title].price).toFixed(2) }</td>
            <td>{ "  " + inventoryQuant - productQuant + " item(s) left in stock " }</td>
            <td  hidden={(()=> {if (inventoryQuant <= productQuant){ return true}})()}><button className="button_product" onClick={this.handleClick.bind(this)} > Add To Cart </button></td>
          </tr>
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
