import React, { Component } from "react";
import {
  Segment,
  Grid,
  Container,
  Header,
  Image,
  Button
} from "semantic-ui-react";
import MainMap from './mainMap.js'
const data = require('./data.json')

class Step1 extends Component {
  handleClickResult = (res) => {
    console.log('xxx', res)
  }
  
  render() {
    return (
      <div>
      <h2>lol</h2>
      <MainMap data={data} handleClickResult={this.handleClickResult}/>
      </div>
    )
  }
}
export default Step1;
