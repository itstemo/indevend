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
        <Grid>
          <Grid.Row>
          <Grid.Column width={10}>
            <MainMap data={data} handleClickResult={this.handleClickResult}/>
          </Grid.Column>
          <Grid.Column width={2}>
              hi
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default Step1;
