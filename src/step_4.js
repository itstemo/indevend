import React, { Component } from "react";
import { Button, Header, Image, Item, Icon, Label, Card } from 'semantic-ui-react';
import { ApplicationItems } from './Helpers/ApplicationItems'

class Step4 extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>You need to submit the following:</Header>
        <br/>
        <ApplicationItems />
      </div>
    );
  }
}

export default Step4
