import React, { Component } from 'react'
import { Link } from 'react-router'



class NavBar extends Component {

  render(){
        return (
          <ul>
            <li><p><Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</Link></p></li>
            <li><p><Link to="/add_product" style={{ textDecoration: 'none', color: 'white'  }}>Add A Product</Link></p></li>
            <li><p><Link to="/browse_inventory" style={{ textDecoration: 'none', color: 'white'  }}> Browse Inventory</Link></p></li>
          </ul>
        );
      }
    }


export default NavBar;
