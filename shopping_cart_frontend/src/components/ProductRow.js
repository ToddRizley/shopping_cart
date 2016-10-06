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
      //method checks the quantity of product in cart vs. in inventory
      //and signals the component state of the "Add To Cart" button to be hidden
      //in such an event
      var title = Object.keys(this.props.productData)[0]
      var inventoryQuant = this.props.productData[title].quantity
      var productInfo = (this.props.shoppingCart.shoppingCart.find((obj)=>
      {if( Object.keys(obj)[0] === title ) { return obj } }))
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
      //method provides the flow of the click event, info is parsed then
      //the quantity input is validated, tge state is toggeled accordingly of
      //the button and the input field is reset or an alert is triggered for an
      //invalid quantity specified
      event.preventDefault()
      var title = Object.keys(this.props.productData)[0]
      var inventoryQuant = this.props.productData[title].quantity
      var productInfo = (this.props.shoppingCart.shoppingCart.find((obj)=>
       {if( Object.keys(obj)[0] === title ) { return obj } }))
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
    if ((quant  > (inventoryQuant - cartQuant)) || isNaN(quant)){
          return false
        } else {
          return true
        }
    }

    displayProductRow(){
      //method displays product row-- ran into issue trying to DRY this code out
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
             <td> <input id={title} className="add_prod_input"
             type="number" placeholder="Quantity" min="1" step="1" ref="quant"
             max={inventoryQuant - productQuant} onChange={this.reset}></input></td>
             <td  hidden={(()=> {if (inventoryQuant <= productQuant){ return true}})()}>
             <button className="button_product" onClick={this.handleClick.bind(this)} > Add To Cart
             </button></td>
           </tr>
         );
       }


    render(){
      return(
        <div>
          {this.displayProductRow()}
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
