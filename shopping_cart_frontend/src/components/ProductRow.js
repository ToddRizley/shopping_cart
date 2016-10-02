import React, { Component } from 'react'


const ProductRow= class extends Component {
  constructor(props) {
      super(props)
      this.state = { disabled: true, quantity: 0 }
    }

    toggleState(){
      this.setState({
        disabled: !this.state.disabled
      })
    }

    handleQuantity(){
      this.setState({
        quantity: this.refs.quantity.value
      })
    }

    displayBox(){
      if (!this.state.disabled){
        return (
          <label><input type="number" className="entry-input" ref="quantity" onChange={this.handleQuantity.bind(this)} min="0" max={this.props.productData.quantity} step="1" />Quantity</label>
        )
      }
    }



  render(){
        return (
          <div><input type="checkbox" class="product" ref={this.state.selected} value={this.props.productData.title} onChange={this.toggleState.bind(this)}/>
          <strong>{ this.props.productData.title }</strong> |
            { " $"+ this.props.productData.price } |
            { " " + this.props.productData.quantity + "items left in stock" }
            {this.displayBox()}
          </div>
        );
      }
    }


export default ProductRow;
