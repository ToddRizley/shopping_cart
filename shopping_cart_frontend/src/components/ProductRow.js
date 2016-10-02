import React, { Component } from 'react'


const ProductRow= class extends Component {
  constructor(props) {
      super(props)
      this.state = { disabled: true }
    }

    toggleState(){
      this.setState({
        disabled: !this.state.disabled
      })
    }

    displayBox(){
      if (!this.state.disabled){
        return (
          <label><input type="number" className="entry-input" min="0" step="1" />Quantity</label>
        )
      }
    }



  render(){
        return (
          <div><input type="radio" name="product" ref="selected-product" value={this.props.productData.title} onChange={this.toggleState.bind(this)}/>
          <strong>{ this.props.productData.title }</strong> |
            { " $"+ this.props.productData.price } |
            { " " + this.props.productData.quantity + "items left in stock" }
            {this.displayBox()}
          </div>
        );
      }
    }


export default ProductRow;
