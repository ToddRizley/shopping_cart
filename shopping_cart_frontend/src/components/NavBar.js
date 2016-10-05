import React, { Component } from 'react'
import { Link } from 'react-router'



class NavBar extends Component {

  render(){
        return (
          <ul>
            <li><p><Link to="/">Home</Link></p></li>
            <li><p><Link to="/add_product">Add A Product</Link></p></li>
            <li><p><Link to="/browse_inventory"> Browse Inventory</Link></p></li>
          </ul>
        );
      }
    }


export default NavBar;
