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

    getTitle(){
      return Object.keys(this.props.productData)[0]
    }

    getInventoryQuant(title){
      return this.props.productData[title].quantity
    }

    getProductInfo (title){
      return (this.props.shoppingCart.shoppingCart.find((obj)=> {if( Object.keys(obj)[0] === title ) { return obj } }))
    }

    getProductQuant(title, productInfo){
      (()=> {
        if (productInfo === undefined){
          return 0
        } else {
          return productInfo[title].quantity
        }
      })()
    }

    handleClick(event){
      event.preventDefault()
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
      if (this.validateQuant(parseInt(this.refs.quant.value), inventoryQuant, productQuant)){
        this.toggleState()
        this.props.addToShoppingCart(this.props.productData, this.props.currentUser.currentUser, this.refs.quant.value)
        document.getElementById(title).value = ""
      } else {
          alert("Invalid Entry")
          document.getElementById(title).value = ""
      }
    }

  toggleVisibility(){
    this.setState({
      hidden: !this.state.hidden
    })
  }

  validateQuant(quant, inventoryQuant, cartQuant){
    if (quant > inventoryQuant - cartQuant){
          return false
        } else {
          return true
        }
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
            <td> <input id={title} className="add_prod_input" type="number" placeholder="Quantity" min="1" step="1" ref="quant" max={inventoryQuant - productQuant} onChange={this.reset}></input></td>
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
