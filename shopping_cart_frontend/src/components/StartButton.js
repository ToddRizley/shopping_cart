import React, { Component } from 'react'
import {Link} from 'react-router'
import fetchCurrentUser from '../actions/fetchCurrentUser'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Button= class extends Component {


  render(){
        return (
          <div>
          <button className="button_start" onClick={this.props.fetchCurrentUser} ><Link to={"/browse_inventory"} style={{ textDecoration: 'none', color: 'white' }}>Get Shopping!</Link></button>
          </div>
        );
      }
    }
const StartButton = connect(null, mapDispatchToProps)(Button)

function mapDispatchToProps(dispatch) {
  return  bindActionCreators({fetchCurrentUser}, dispatch)
}




export default StartButton;
