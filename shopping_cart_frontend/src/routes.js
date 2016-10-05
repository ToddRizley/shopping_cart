import React from 'react'
import { Route } from 'react-router'
import App from './App'
import AddProductForm from './components/AddProductForm'
import ShoppingContainer from './containers/ShoppingContainer'


export default (
  <Route>
    <Route path="/" component={App} />
    <Route path="/add_product" component={AddProductForm} />
    <Route path="/browse_inventory" component={ShoppingContainer} />
  </Route>
  );
