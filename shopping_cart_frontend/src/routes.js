import React from 'react'
import { Route } from 'react-router'
import App from './App'
import AddProductForm from './components/AddProductForm'
import InventoryList from './containers/InventoryList'



export default (
  <Route>
    <Route path="/" component={App} />
    <Route path="/add_product" component={AddProductForm} />
    <Route path="/inventory" component={InventoryList} />
  </Route>
  );
